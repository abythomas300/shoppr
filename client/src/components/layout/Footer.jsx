
function Footer() {
    return(
        <>
            <footer className="footer sm:footer-horizontal bg-primary text-base-content p-10">
              <nav>
                <h6 className="footer-title">ABOUT</h6>
                <a className="link link-hover" href="mailto:abythomas300@gmail.com">Contact Us</a>
                <a className="link link-hover" href="https://www.github.com/abythomas300">About Us</a>
                <a className="link link-hover" href="mailto:abythomas300@gmail.com">Careers</a>
                <a className="link link-hover" href="mailto:abythomas300@gmail.com">Shoppr Stories</a>
              </nav>
              <nav>
                <h6 className="footer-title">GROUP COMPANIES</h6>
                <a className="link link-hover">Shoppr Finance</a>
                <a className="link link-hover">Shoppr Media Center</a>
                <a className="link link-hover">Shoppr Entertainment</a>
              </nav>
              <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
              <nav>
                <h6 className="footer-title">HELP</h6>
                <a className="link link-hover">Payments</a>
                <a className="link link-hover">Shipping</a>
                <a className="link link-hover">Returns</a>
              </nav>
            </footer>
            <footer className="footer bg-primary text-base-content border-base-300 border-t px-10 py-4">
              <aside className="grid-flow-col items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-current">
                  <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                  <span className="footer-title">Aby's Home Lab</span>
                  <br />
                  <span>Building tech with passion</span>
                </p>
                
              </aside>
              
              <nav>
                <span className="md:hidden">Follow me on </span>
                <div className="grid grid-flow-col gap-2 ms-0"> 
                    <div tabIndex={0} role="button" className="hidden md:flex p-2">
                            <span>Follow me on</span>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                        <a href="https://www.github.com/abythomas300">
                            <svg className="w-6 h-6 text-primary-content" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                            </svg>

                        </a>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                        <a href="https://www.instagram.com/captainmell0">
                            <svg className="w-6 h-6 text-primary-content" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                        <a href="https://www.x.com/abyfaster7">
                        <svg className="w-6 h-6 text-primary-content" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                        </svg>
                        </a>
                    </div>
                </div>
              </nav>
                <div className="flex w-full text-xs justify-center"> 
                    <span>Copyright © 2025-2026 - All right reserved by Shoppr Media Center LLC</span>
                </div>
            </footer>
        </>
    ) 
  
}

export default Footer


  