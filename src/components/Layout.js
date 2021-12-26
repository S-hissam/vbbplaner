import { VscAccount, VscHeart, VscTwitter } from "react-icons/vsc";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <main>
        <div className='flex justify-start items-center h-screen'>
          <div className="mockup-phone drop-shadow-2xl">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard phone-4 artboard-demo justify-start bg-gradient-to-r from-cyan-500 to-blue-500">
                {children}
                <div className="navbar shadow-lg bg-black text-neutral-content w-full absolute bottom-2 flex items-center justify-around " >
                  <a href='About' className="hover:animate-pulse btn btn-ghost rounded-btn">
                    <VscTwitter/>
                  </a>
                  <a href="/" className="hover:animate-pulse btn btn-ghost rounded-btn">
                    <VscHeart />
                  </a>
                  <a href='Profil' className="hover:animate-pulse btn btn-ghost rounded-btn">
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
