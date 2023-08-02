"use client";

import { useEffect } from "react";

import subscribe from "./images/subscribe.png";

import Image from "next/image";

const Newsletter = () => {
  useEffect(() => {
    (function (w, d, t, h, s, n) {
      w.FlodeskObject = n;
      var fn = function () {
        (w[n].q = w[n].q || []).push(arguments);
      };
      w[n] = w[n] || fn;
      var f = d.getElementsByTagName(t)[0];
      var v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
      var sm = d.createElement(t);
      sm.async = true;
      sm.type = "module";
      sm.src = h + s + ".mjs" + v;
      f.parentNode.insertBefore(sm, f);
      var sn = d.createElement(t);
      sn.async = true;
      sn.noModule = true;
      sn.src = h + s + ".js" + v;
      f.parentNode.insertBefore(sn, f);
    })(
      window,
      document,
      "script",
      "https://assets.flodesk.com",
      "/universal",
      "fd"
    );
    window.fd("form:handle", {
      formId: "64c9882f7e6b513e5baccb16",
      rootEl: ".ff-64c9882f7e6b513e5baccb16",
    });
  }, []);

  return (
    <div className="bg-[#f2f2ef5e]  flex items-center">
      <div className=" lg:flex lg:flex-row">
        <div className="relative h-[30rem] bg-cover bg-center  items-center lg:w-[25rem] ml-0 hidden lg:block">
          <Image
            src={subscribe}
            layout="fill"
            objectFit="cover"
            alt="subscribe"
          />
        </div>

        <div
          className="flex flex-col justify-center lg:mx-20 mx-5 p-10 lg:p-5"
          data-ff-el="root"
          data-ff-version="3"
          data-ff-type="inline"
          data-ff-name="ribbonBanner">
          <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjp0cnVlfQ=="></div>
          <div className="flex mb-4" data-paragraph="true">
            <h1 className="text-3xl lg:text-5xl lg:text-start">Subscribe Our</h1>
            <h1 className="text-3xl lg:text-5xl ml-3 text-[#fb653e]">
              Newsletter
            </h1>
          </div>

          <div className="lg:w-[44rem]">
            <p className="mb-10" data-paragraph="true">
              You don't have to “entrepreneur” on your own. For tips and
              personal stories on how to make sure your business is running
              flawlessly enter your name and email below.
            </p>
          </div>



          <div className="">
            <form
              action="https://form.flodesk.com/forms/64c9882f7e6b513e5baccb16/submit"
              method="post"
              data-ff-el="form">
              <div data-ff-el="content">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-2" data-ff-el="fields">
                  <div>
                    <input
                      className="input drop-shadow-md w-full text-center md:text-start"
                      id="ff-64c9882f7e6b513e5baccb16-firstName"
                      type="text"
                      maxlength="255"
                      name="firstName"
                      placeholder="Name"
                      data-ff-tab="firstName::email"
                    />
                  </div>

                  <div>
                    <input
                      className="input drop-shadow-md w-full text-center md:text-start"
                      id="ff-64c9882f7e6b513e5baccb16-email"
                      type="text"
                      maxlength="255"
                      name="email"
                      placeholder="Email "
                      data-ff-tab="email:firstName:submit"
                      required
                    />
                  </div>

                  <div data-ff-el="footer">
                    <button
                      className="btn bg-[#fb653e] text-white w-full drop-shadow-md hover:bg-[#333333] hover:text-white"
                      type="submit"
                      data-ff-el="submit"
                      data-ff-tab="submit">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="ff-64c9882f7e6b513e5baccb16__error fd-form-error"
                data-ff-el="error"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
