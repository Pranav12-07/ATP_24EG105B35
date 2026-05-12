

function Footer() {
  return (
    <footer className="bg-[#f7f6f4] border-t border-[#e2e0db] py-6 mt-10">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-[#6f6f6f]">
        <p>© {new Date().getFullYear()} MyBlog. Built for Week 7 project.</p>
      </div>
    </footer>
  )
}

export default Footer