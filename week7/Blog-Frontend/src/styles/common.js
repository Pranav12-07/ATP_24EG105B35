// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#eef2ff] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-white rounded-2xl p-7 shadow-sm hover:bg-[#eef2ff] transition-colors duration-200 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-bold text-[#1f2937] tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-bold text-[#1f2937] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[#374151] tracking-tight";
export const bodyText = "text-[#4b5563] leading-relaxed";
export const mutedText = "text-sm text-[#6b7280]";
export const linkClass = "text-[#4f46e5] hover:text-[#4338ca] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#4f46e5] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#4338ca] transition-colors cursor-pointer text-sm tracking-tight";
export const secondaryBtn =
  "border border-[#c7d2fe] text-[#1f2937] font-medium px-5 py-2 rounded-full hover:bg-[#eff6ff] transition-colors cursor-pointer text-sm";
export const ghostBtn =
  "text-[#4f46e5] font-medium hover:text-[#4338ca] transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-white rounded-2xl p-10 max-w-4xl mx-auto shadow-sm";
export const formTitle = "text-2xl font-bold text-[#1f2937] tracking-tight text-center mb-7";
export const labelClass = "text-xs font-medium text-[#4b5563] mb-1.5 block";
export const inputClass =
  "w-full bg-white border border-[#c7d2fe] rounded-xl px-4 py-2.5 text-[#1f2937] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/10 transition";
export const formGroup = "mb-4";
export const submitBtn =
  "w-full bg-[#4f46e5] text-white font-semibold py-2.5 rounded-full hover:bg-[#4338ca] transition-colors cursor-pointer mt-2 text-sm tracking-tight";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[#eef2ff]/90 backdrop-blur-xl border-b border-[#dbeafe] px-8 h-[52px] flex items-center sticky top-0 z-50";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-base font-semibold text-[#1f2937] tracking-tight";
export const navLinksClass = "flex items-center gap-7";
export const navLinkClass =
  "text-[0.8rem] text-[#6b7280] hover:text-[#1f2937] transition-colors font-normal";
export const navLinkActiveClass =
  "text-[0.8rem] text-[#4f46e5] font-medium";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
export const articleCardClass =
  "bg-white p-7 hover:bg-[#eef2ff] transition-colors duration-200 flex flex-col gap-2.5 cursor-pointer shadow-sm";
export const articleTitle = "text-base font-semibold text-[#1f2937] leading-snug tracking-tight";
export const articleExcerpt = "text-sm text-[#4b5563] leading-relaxed";
export const articleMeta = "text-xs text-[#6b7280]";
export const articleBody = "text-[#4b5563] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-[#6b7280] flex items-center gap-1.5";
export const tagClass =
  "text-[0.65rem] font-semibold text-[#4f46e5] uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-10 flex flex-col gap-4";
export const articleCategory =
  "text-[0.7rem] font-semibold uppercase tracking-widest text-[#4f46e5]";
export const articleMainTitle =
  "text-4xl font-bold text-[#1f2937] leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#dbeafe] py-4 text-sm text-[#4b5563]";
export const authorInfo = "flex items-center gap-2 font-medium text-[#1f2937]";
export const articleContent =
  "text-[#1f2937] leading-[1.9] text-[1rem] whitespace-pre-line mt-8";
export const articleFooter =
  "border-t border-[#dbeafe] mt-12 pt-6 text-sm text-[#6b7280]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-6";
export const editBtn =
  "bg-[#4f46e5] text-white text-sm px-4 py-2 rounded-full hover:bg-[#4338ca] transition";
export const deleteBtn =
  "bg-[#ef4444] text-white text-sm px-4 py-2 rounded-full hover:bg-[#dc2626] transition";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#bef264]/20 text-[#4d7c0f]";
export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#fecaca]/20 text-[#991b1b]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#fecaca]/80 text-[#991b1b] border border-[#fecaca] rounded-xl px-4 py-3 text-sm";
export const successClass =
  "bg-[#bbf7d0]/80 text-[#166534] border border-[#bbf7d0] rounded-xl px-4 py-3 text-sm";
export const loadingClass = "text-[#4f46e5]/60 text-sm animate-pulse text-center py-10";
export const emptyStateClass = "text-center text-[#6b7280] py-16 text-sm";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-12 flex flex-col gap-6";
export const commentCard =
  "bg-white rounded-2xl p-5 transition hover:bg-[#eff6ff]";
export const commentHeader = "flex items-center justify-between mb-2";
export const commentUser = "text-sm font-semibold text-[#1f2937]";
export const commentTime = "text-xs text-[#6b7280]";
export const commentText =
  "text-[#1f2937] text-sm leading-relaxed mt-1";
export const avatar =
  "w-9 h-9 rounded-full bg-[#c7d2fe]/10 text-[#4338ca] flex items-center justify-center text-sm font-semibold";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#e2e0db] my-10";