import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            minima molestias voluptatibus quibusdam dolore nobis expedita eaque
            eos consectetur illum iusto quis, vel dolor temporibus quisquam
            suscipit consequuntur quam, doloribus culpa accusamus, autem
            voluptatum? Dolores esse exercitationem mollitia, veniam qui
            accusamus quam amet asperiores quidem soluta unde illum accusantium
            rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit maxime qui mollitia quas hic optio ducimus delectus
            ratione. Itaque optio odit hic, facere harum reiciendis? Expedita
            exercitationem ipsa id corrupti, nam ut eos voluptate nostrum!
            Distinctio dolores, eaque nemo nostrum adipisci, repellendus maxime
            sapiente delectus aliquid excepturi minus, veritatis voluptate.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, ullam.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
