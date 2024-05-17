import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>

            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 17, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, laborum neque. Eos error labore illo consequatur qui tenetur dicta sed provident quibusdam! Vero necessitatibus omnis, cumque, praesentium eveniet ducimus quae voluptas porro reiciendis modi esse quis ullam velit maiores, totam atque fugiat eos delectus exercitationem beatae ipsum? Quia, quaerat ipsa?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;