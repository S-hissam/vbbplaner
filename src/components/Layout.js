import { VscAccount, VscHeart, VscTwitter } from "react-icons/vsc";

export default function Layout({ children }) {
  return (
    <div>
      <main>
        <div className='flex justify-start items-center h-screen'>
          <div className="mockup-phone drop-shadow-2xl">
            <div className="camera"></div>
            <div className="display">
              <div
                className="artboard phone-3 artboard-demo justify-start bg-gradient-to-r from-sky-600 to-indigo-500 text-white">
                {children}
                <div className="navbar shadow-lg bg-black text-neutral-content w-full absolute bottom-2 flex items-center justify-around " >
                  <a href='/' className="hover:animate-pulse btn btn-ghost rounded-btn">
                    <VscTwitter/>
                  </a>
                  <a href="/" className="hover:animate-pulse btn btn-ghost rounded-btn">
                    <VscHeart />
                  </a>
                  <a href='/' className="hover:animate-pulse btn btn-ghost rounded-btn">
                    <VscAccount />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div>

  )

}
