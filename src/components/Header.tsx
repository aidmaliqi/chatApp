export function Header() {
  let slideSearch = document.querySelector<HTMLInputElement>(".search-input");
  function showBar() {
    if (slideSearch !== null) {
      slideSearch.style.display = "block";
    }
  }

  return (
    <header className="header">
      <section className="header-firstSection">
        <h1>WhatsApp</h1>
        <form action="" className="search-form">
          <input type="search" className="search-input" placeholder="Search Contact" />
          <span
            className="material-symbols-outlined"
            onClick={() => {
              showBar();
            }}
          >
            search
          </span>
        </form>

        <span className="material-symbols-outlined"> more_vert </span>
      </section>
      <section className="header-secondSection">
        <span className="material-symbols-outlined"> photo_camera </span>
        <span> CHATS</span>
        <span>STATUS</span>
        <span>CALLS</span>
      </section>
    </header>
  );
}
