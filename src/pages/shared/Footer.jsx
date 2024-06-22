const Footer = () => {
  return (
    <footer className="text-white bg-emerald-500 dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                {/* <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                /> */}
                <h1 className="font-bold w-auto text-4xl">Active Pulse</h1>
              </a>

              <p className="max-w-sm mt-2 text-white dark:text-white">
                Join 31,000+ other and never miss out on new tips, tutorials,
                and more.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 hover:text-blue-300"
                  aria-label="Reddit"
                ></a>
                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 hover:text-blue-300"
                  aria-label="Facebook"
                ></a>
                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 hover:text-blue-300"
                  aria-label="Github"
                ></a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-white uppercase">About</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-white uppercase">Blog</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Tec
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-white uppercase">Products</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="text-white uppercase">Contact</h3>
                <span className="block mt-2 text-sm text-white hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-white hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-white border-none" />

        <div>
          <p className="text-center text-white">
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
