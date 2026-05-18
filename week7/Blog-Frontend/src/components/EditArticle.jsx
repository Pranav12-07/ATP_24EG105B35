import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
} from "../styles/common";

function EditArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // prefill form
  useEffect(() => {
    if (article) {
      setValue("title", article.title);
      setValue("category", article.category);
      setValue("content", article.content);
      return;
    }

    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:4000/user-api/article/${id}`, { withCredentials: true });
        setArticle(res.data.payload);
        setValue("title", res.data.payload.title);
        setValue("category", res.data.payload.category);
        setValue("content", res.data.payload.content);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [article, id, setValue]);

  const updateArticle = async (modifiedArticle) => {
    if (!article) return;

    modifiedArticle.articleId = article._id || id;
    try {
      const res = await axios.put(
        "http://localhost:4000/author-api/articles",
        modifiedArticle,
        { withCredentials: true },
      );
      if (res.status === 200) {
        navigate(`/article/${article._id || id}`, { state: res.data.payload });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update article");
    }
  };

  if (loading) {
    return <p className={errorClass}>Loading article details...</p>;
  }

  if (error) {
    return <p className={errorClass}>{error}</p>;
  }

  return (
    <div className={`${formCard} mt-10`}>
      <h2 className={formTitle}>Edit Article</h2>

      <form onSubmit={handleSubmit(updateArticle)}>
        {/* Title */}
        <div className={formGroup}>
          <label className={labelClass}>Title</label>

          <input className={inputClass} {...register("title", { required: "Title required" })} />

          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        {/* Category */}
        <div className={formGroup}>
          <label className={labelClass}>Category</label>

          <select className={inputClass} {...register("category", { required: "Category required" })}>
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="ai">AI</option>
            <option value="web-development">Web Development</option>
          </select>

          {errors.category && <p className={errorClass}>{errors.category.message}</p>}
        </div>

        {/* Content */}
        <div className={formGroup}>
          <label className={labelClass}>Content</label>

          <textarea rows="14" className={inputClass} {...register("content", { required: "Content required" })} />

          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>

        <button className={submitBtn}>Update Article</button>
      </form>
    </div>
  );
}

export default EditArticle;
