// "use client";

// import { useState } from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function TagUsSection() {
//   const [showUpload, setShowUpload] = useState(false);

//   const socialPosts = [
//     {
//       id: 1,
//       platform: "Instagram",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/45e1e6cb-4c55-457f-8300-90bdc437edb3.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/45e1e6cb-4c55-457f-8300-90bdc437edb3.jpg",
//       link: "https://www.instagram.com/p/C9_5IbQvdAp/",
//     },
//     {
//       id: 2,
//       platform: "LinkedIn",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/ce0dcfce-512d-4d7e-ab1f-f1b8f0c572b4.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/ce0dcfce-512d-4d7e-ab1f-f1b8f0c572b4.jpg",
//       link: "https://www.linkedin.com/posts/joinalike_alike-new-joinees-activity-7223575527939325952-4Kwx",
//     },
//     {
//       id: 3,
//       platform: "Twitter",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/21a83464-a1fa-4014-be7c-560c656d56eb.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/21a83464-a1fa-4014-be7c-560c656d56eb.jpg",
//       link: "https://x.com/joinalike/status/1802199901746450778",
//     },
//     {
//       id: 4,
//       platform: "Instagram",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/f3e04d6e-85a7-4f2f-9c99-a86dcf5b6298.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/f3e04d6e-85a7-4f2f-9c99-a86dcf5b6298.jpg",
//       link: "https://www.instagram.com/p/C9wc1E6vsIM/",
//     },
//     {
//       id: 5,
//       platform: "LinkedIn",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/c2e33cf0-e0c7-48b9-8e74-b8ea11ab9ea6.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/c2e33cf0-e0c7-48b9-8e74-b8ea11ab9ea6.jpg",
//       link: "https://www.linkedin.com/posts/joinalike_alike-aliketravel-heyalike-activity-7218923863047356417-_fKz",
//     },
//     {
//       id: 6,
//       platform: "Twitter",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/b98f6009-1be6-4974-9b9e-d23e4aa99b3a.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/b98f6009-1be6-4974-9b9e-d23e4aa99b3a.jpg",
//       link: "https://x.com/joinalike/status/1789949037564543294/photo/3",
//     },
//     {
//       id: 7,
//       platform: "Instagram",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/98e2d4dd-885a-4086-8752-e434b922ef32.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/98e2d4dd-885a-4086-8752-e434b922ef32.jpg",
//       link: "https://www.instagram.com/p/C-Fl89sSdCo/",
//     },
//     {
//       id: 8,
//       platform: "LinkedIn",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/1d42ff22-1a66-46f5-ab43-63a3c46d44d2.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/1d42ff22-1a66-46f5-ab43-63a3c46d44d2.jpg",
//       link: "https://www.linkedin.com/posts/happiest-places-to-work%C2%AE%EF%B8%8F_employeeappreciation-careergrowth-careermilestone-activity-7214194309934292994-dg0C",
//     },
//     {
//       id: 9,
//       platform: "Twitter",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/80b8c3d5-317e-4fd4-9813-c5156cc0468c.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/80b8c3d5-317e-4fd4-9813-c5156cc0468c.jpg",
//       link: "https://x.com/Girliyapa/status/1812017411182240074/photo/1",
//     },
//     {
//       id: 10,
//       platform: "Instagram",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/47a1f9d5-5829-44d3-a988-f2b46202f6b1.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/47a1f9d5-5829-44d3-a988-f2b46202f6b1.jpg",
//       link: "https://www.instagram.com/joinalike/p/C-IJqbjByhG/",
//     },
//     {
//       id: 11,
//       platform: "LinkedIn",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/57edc359-61cd-4c79-8165-6969279d8cb4.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/57edc359-61cd-4c79-8165-6969279d8cb4.jpg",
//       link: "https://www.linkedin.com/posts/joinalike_alike-new-joinees-activity-7211996769214189568-TyIa",
//     },
//     {
//       id: 12,
//       platform: "Twitter",
//       username: "@joinalike",
//       avatar:
//         "https://alike-asset.b-cdn.net/directus-images/d5004848-9d15-4e0c-9a1f-5230306dd1ca.jpg",
//       image:
//         "https://alike-asset.b-cdn.net/directus-images/d5004848-9d15-4e0c-9a1f-5230306dd1ca.jpg",
//       link: "https://x.com/dctabudhabi/status/1766064780329287995/photo/1",
//     },
//   ];

//   const hashtags = [
//     "#TravysysTravel",
//     "#Travysys",
//     "#JoinTravysys",
//     "#VisaOnUsSummerOnYou",
//   ];

//   const socialPlatforms = [
//     {
//       name: "Instagram",
//       icon: FaInstagram,
//       link: "https://www.instagram.com/joinalike/",
//     },
//     {
//       name: "Facebook",
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/joinalike.io",
//     },
//     { name: "Twitter", icon: FaTwitter, link: "https://x.com/joinalike" },
//     {
//       name: "YouTube",
//       icon: FaYoutube,
//       link: "https://www.youtube.com/@joinalike",
//     },
//     {
//       name: "LinkedIn",
//       icon: FaLinkedinIn,
//       link: "https://www.linkedin.com/company/joinalike/",
//     },
//   ];

//   return (
//     <section className="bg-orange-50 py-16 md:py-0 md:h-screen overflow-hidden">
//       <div className="h-full">
//         <div className="flex flex-col md:flex-row h-full md:gap-14">
//           {/* Left Column */}
//           <div className="md:flex-[0_0_460px] w-full md:w-3/6 flex-1 flex flex-col px-4 xxs:px-6 md:px-0 justify-center pt-16 pb-0 md:py-0 md:pl-20">
//             <div className="text-3xl md:text-5xl text-gray-900 font-bold text-start">
//               <h2>
//                 Tag us on your
//                 <br />
//                 next trip
//               </h2>
//             </div>

//             <div className="text-base md:text-lg font-normal mt-4 md:mt-6 md:text-start whitespace-normal text-gray-700">
//               {hashtags.map((tag, index) => (
//                 <div key={index} className="text-orange-500">
//                   <span>{tag}</span>
//                   {(index === 1 || index === 2) && <br />}
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-2 mt-6">
//               {socialPlatforms.map((platform, index) => (
//                 <a
//                   key={index}
//                   href={platform.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <platform.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right - Posts */}
//           <div className="flex-1 relative">
//             {/* Mobile Horizontal Scroll */}
//             <div className="md:hidden relative overflow-x-hidden parent-scroll flex items-center w-full overflow-hidden gap-6">
//               <div className="sub-scrolling flex items-center flex-1 left-to-right whitespace-nowrap gap-6 py-12 animate-scroll-horizontal">
//                 {socialPosts.concat(socialPosts).map((post, index) => (
//                   <div
//                     key={`${post.id}-${index}`}
//                     className="rounded-lg overflow-hidden flex-[0_0_266px]"
//                   >
//                     <a
//                       href={post.link}
//                       rel="noopener noreferrer"
//                       target="_blank"
//                       className="group relative block"
//                     >
//                       <img
//                         src={post.image}
//                         alt={`${post.platform} post`}
//                         className="object-cover h-full w-full border border-gray-200 rounded-lg aspect-[266/364]"
//                       />
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Desktop Vertical Scroll */}
//             <div className="relative hidden md:flex overflow-y-hidden gap-8 p-30">
//               <div className="relative parent-scroll flex-1">
//                 <div className="sub-scrolling flex top-to-bottom gap-6 flex-col animate-scroll-up">
//                   {socialPosts
//                     .slice(0, 6)
//                     .concat(socialPosts.slice(0, 6))
//                     .map((post, index) => (
//                       <div
//                         key={`col1-${post.id}-${index}`}
//                         className="group overflow-hidden relative rounded-lg"
//                       >
//                         <a
//                           href={post.link}
//                           rel="noopener noreferrer"
//                           target="_blank"
//                         >
//                           <img
//                             src={post.image}
//                             alt={`${post.platform} post`}
//                             className="object-cover w-full border border-gray-200 rounded-lg aspect-[302/404]"
//                           />
//                         </a>
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               <div className="relative parent-scroll flex-1">
//                 <div className="sub-scrolling bottom-to-top-2 gap-6 flex flex-col animate-scroll-down">
//                   {socialPosts
//                     .slice(6, 12)
//                     .concat(socialPosts.slice(6, 12))
//                     .map((post, index) => (
//                       <div
//                         key={`col2-${post.id}-${index}`}
//                         className="group overflow-hidden relative rounded-lg"
//                       >
//                         <a
//                           href={post.link}
//                           rel="noopener noreferrer"
//                           target="_blank"
//                         >
//                           <img
//                             src={post.image}
//                             alt={`${post.platform} post`}
//                             className="object-cover w-full border border-gray-200 rounded-lg aspect-[302/404]"
//                           />
//                         </a>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-horizontal {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-up {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-50%);
//           }
//         }

//         @keyframes scroll-down {
//           0% {
//             transform: translateY(-50%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }

//         .animate-scroll-horizontal {
//           animation: scroll-horizontal 60s linear infinite;
//         }

//         .animate-scroll-up {
//           animation: scroll-up 40s linear infinite;
//         }

//         .animate-scroll-down {
//           animation: scroll-down 40s linear infinite;
//         }

//         .parent-scroll {
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TagUsSection() {
  const socialPosts = [
    {
      id: 1,
      platform: "Instagram",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/45e1e6cb-4c55-457f-8300-90bdc437edb3.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/45e1e6cb-4c55-457f-8300-90bdc437edb3.jpg",
      link: "https://www.instagram.com/p/C9_5IbQvdAp/",
    },
    {
      id: 2,
      platform: "LinkedIn",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/ce0dcfce-512d-4d7e-ab1f-f1b8f0c572b4.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/ce0dcfce-512d-4d7e-ab1f-f1b8f0c572b4.jpg",
      link: "https://www.linkedin.com/posts/joinalike_alike-new-joinees-activity-7223575527939325952-4Kwx",
    },
    {
      id: 3,
      platform: "Twitter",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/21a83464-a1fa-4014-be7c-560c656d56eb.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/21a83464-a1fa-4014-be7c-560c656d56eb.jpg",
      link: "https://x.com/joinalike/status/1802199901746450778",
    },
    {
      id: 4,
      platform: "Instagram",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/f3e04d6e-85a7-4f2f-9c99-a86dcf5b6298.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/f3e04d6e-85a7-4f2f-9c99-a86dcf5b6298.jpg",
      link: "https://www.instagram.com/p/C9wc1E6vsIM/",
    },
    {
      id: 5,
      platform: "LinkedIn",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/c2e33cf0-e0c7-48b9-8e74-b8ea11ab9ea6.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/c2e33cf0-e0c7-48b9-8e74-b8ea11ab9ea6.jpg",
      link: "https://www.linkedin.com/posts/joinalike_alike-aliketravel-heyalike-activity-7218923863047356417-_fKz",
    },
    {
      id: 6,
      platform: "Twitter",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/b98f6009-1be6-4974-9b9e-d23e4aa99b3a.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/b98f6009-1be6-4974-9b9e-d23e4aa99b3a.jpg",
      link: "https://x.com/joinalike/status/1789949037564543294/photo/3",
    },
    {
      id: 7,
      platform: "Instagram",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/98e2d4dd-885a-4086-8752-e434b922ef32.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/98e2d4dd-885a-4086-8752-e434b922ef32.jpg",
      link: "https://www.instagram.com/p/C-Fl89sSdCo/",
    },
    {
      id: 8,
      platform: "LinkedIn",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/1d42ff22-1a66-46f5-ab43-63a3c46d44d2.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/1d42ff22-1a66-46f5-ab43-63a3c46d44d2.jpg",
      link: "https://www.linkedin.com/posts/happiest-places-to-work%C2%AE%EF%B8%8F_employeeappreciation-careergrowth-careermilestone-activity-7214194309934292994-dg0C",
    },
    {
      id: 9,
      platform: "Twitter",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/80b8c3d5-317e-4fd4-9813-c5156cc0468c.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/80b8c3d5-317e-4fd4-9813-c5156cc0468c.jpg",
      link: "https://x.com/Girliyapa/status/1812017411182240074/photo/1",
    },
    {
      id: 10,
      platform: "Instagram",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/47a1f9d5-5829-44d3-a988-f2b46202f6b1.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/47a1f9d5-5829-44d3-a988-f2b46202f6b1.jpg",
      link: "https://www.instagram.com/joinalike/p/C-IJqbjByhG/",
    },
    {
      id: 11,
      platform: "LinkedIn",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/57edc359-61cd-4c79-8165-6969279d8cb4.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/57edc359-61cd-4c79-8165-6969279d8cb4.jpg",
      link: "https://www.linkedin.com/posts/joinalike_alike-new-joinees-activity-7211996769214189568-TyIa",
    },
    {
      id: 12,
      platform: "Twitter",
      username: "@joinalike",
      avatar:
        "https://alike-asset.b-cdn.net/directus-images/d5004848-9d15-4e0c-9a1f-5230306dd1ca.jpg",
      image:
        "https://alike-asset.b-cdn.net/directus-images/d5004848-9d15-4e0c-9a1f-5230306dd1ca.jpg",
      link: "https://x.com/dctabudhabi/status/1766064780329287995/photo/1",
    },
  ];

  const hashtags = [
    "#TravysysTravel",
    "#Travysys",
    "#JoinTravysys",
    "#VisaOnUsSummerOnYou",
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/joinalike/",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/joinalike.io",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://x.com/joinalike",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "https://www.youtube.com/@joinalike",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/joinalike/",
    },
  ];

  return (
    <section className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center md:gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="w-full md:w-[460px] flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Tag us on your
            <br />
            next trip
          </h2>

          <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-1">
            {hashtags.map((tag, index) => (
              <div key={index} className="text-orange-500">
                {tag}
                {(index === 1 || index === 2) && <br />}
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-3 mt-6">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                <platform.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full mt-10 md:mt-0 md:flex-1 relative">
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-6 snap-x snap-mandatory">
              {socialPosts.concat(socialPosts).map((post, index) => (
                <div
                  key={`${post.id}-${index}`}
                  className="snap-center flex-shrink-0 w-64"
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-gray-200"
                  >
                    <img
                      src={post.image}
                      alt={`Post from ${post.platform} by ${post.username}`}
                      className="w-full h-auto object-cover aspect-[3/4]"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Vertical Scroll */}
          <div className="hidden md:flex gap-6 h-[calc(100vh-120px)] overflow-hidden">
            {/* Left Scroll Column */}
            <div className="flex-1 overflow-hidden relative">
              <div className="flex flex-col gap-6 animate-scroll-up">
                {socialPosts
                  .slice(0, 6)
                  .concat(socialPosts.slice(0, 6))
                  .map((post, index) => (
                    <div
                      key={`col1-${post.id}-${index}`}
                      className="overflow-hidden rounded-lg border border-gray-200"
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={post.image}
                          alt={`Post from ${post.platform} by ${post.username}`}
                          className="w-full h-auto object-cover aspect-[3/4]"
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Scroll Column */}
            <div className="flex-1 overflow-hidden relative">
              <div className="flex flex-col gap-6 animate-scroll-down">
                {socialPosts
                  .slice(6, 12)
                  .concat(socialPosts.slice(6, 12))
                  .map((post, index) => (
                    <div
                      key={`col2-${post.id}-${index}`}
                      className="overflow-hidden rounded-lg border border-gray-200"
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={post.image}
                          alt={`Post from ${post.platform} by ${post.username}`}
                          className="w-full h-auto object-cover aspect-[3/4]"
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
