const IconBack = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );

function PageHeader({pageName}) {
    return(
        <header className="bg-base-100 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <button className="btn btn-ghost btn-square btn-sm">
            <IconBack />
          </button>
          <h1 className="flex-1 text-center text-lg sm:text-xl font-semibold">{pageName}</h1>
        </div>
      </header>
    )
}

export default PageHeader