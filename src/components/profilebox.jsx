import React from 'react';

const ProfileBox = () => {
    const profile = {
        username: "tarun",
        email: "tarun@gmail.com",
        phone: "7892174140",
        college: "the oxford college of engineering",
        degree: "BE",
        years: "4 years",
        achievements: [
            "Achievement 1",
            "Achievement 2",
            "Achievement 3",
            "Achievement 4",
        ],
        classesEnrolled: [
            "Class 1",
            "Class 2",
            "Class 3",
            "Class 4",
        ],
    };

    return (
        <div id="profilebox" className="h-max w-[300px] border border-black rounded-lg flex-col mt-4 ml-4 relative mt-16 z-0">
            {/* Blue background section */}
            <div className="h-24 bg-blue-700 rounded-t-lg">
                {/* Profile photo placeholder */}
                <div className="size-[80px] relative top-12 left-5">
                    <img src="https://cdn3.iconfinder.com/data/icons/communication-social-media-1/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="profile pic placeholder" />
                    {/* Username and Email */}
                    <p className="relative left-4 bottom-3 font-bold">{profile.username}</p>
                    <p className="text-xs relative bottom-3 left-2">{profile.email}</p>
                </div>
            </div>

            {/* Edit profile button */}
            <div className="flex justify-end">
                <button className="h-6 w-24 border border-black rounded-[100px] relative bottom-4 right-3 bg-white text-[12px] font-bold">
                    edit profile
                </button>
            </div>

            {/* Contact details */}
            <div className="text-sm relative top-14 grid grid-rows-4 grid-cols-2 gap-1">
                <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                    </svg>
                    <p>{profile.phone}</p>
                </div>

                <div className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
                    </svg>
                    <p>{profile.college}</p>
                </div>

                <div className="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
                    </svg>
                    <p>{profile.degree}</p>
                </div>

                <div className="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill height="24px" viewBox="http://www.w3.org/2000/svg" width="24px" fill="#e3e3e3">
                        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                    </svg>
                    <p>{profile.years}</p>
                </div>
            </div>

            {/* Achievements */}
            <div>
                <h1 className="font-bold">ACHIEVEMENT BADGES</h1>
                <div>
                    <div className="grid grid-rows-4 grid-cols-2 gap-2">
                        {profile.achievements.map((achievement, index) => (
                            <div key={index} className="w-20 h-10 rounded-full bg-blue-300"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Classes Enrolled */}
            <div className="grid grid-cols-1 gap-3">
                <h1 className="font-bold">CLASSES ENROLLED</h1>
                {profile.classesEnrolled.map((className, index) => (
                    <div key={index} className="w-52 h-16 rounded-lg bg-blue-300"></div>
                ))}
            </div>
        </div>
    );
}

export default ProfileBox;
