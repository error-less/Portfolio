import "./testimonial.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Rishabh Rathore",
      title: "Senior Developer",
      img:
        "https://www.instagram.com/p/CH0M1aSBsgF/",
      icon: "assets/twitter.png",
      desc:
        "Full stack developer and UI designer. Secretary of OSS Club of AIT.",
    },
    {
      id: 2,
      name: "Sayan Ghanti",
      title: "Competetitive Programmer",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Master in cpmpetetitive programming and C++ .Secretary of Coding Cell of AIT.",
      featured: true,
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      title: "Programmer",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Good student and topper of our college.Good in Programming as well as robotics.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
