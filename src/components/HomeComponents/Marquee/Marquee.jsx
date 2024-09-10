import Marquee from "react-fast-marquee";
import img1 from '../../../assets/marquee/themeforest1.png';
import img2 from '../../../assets/marquee/themeforest2.png';
import img3 from '../../../assets/marquee/themeforest3.png';
import img4 from '../../../assets/marquee/themeforest4.png';
import img5 from '../../../assets/marquee/themeforest5.png';
import img6 from '../../../assets/marquee/themeforest6.png';

export default function Marquees() {
  return (
    <div className="max-w-screen-2xl mx-auto border-y py-8">
      <Marquee
        style={{
          width: "100%",
          height: "auto", // Make the height automatic to fit images
          backgroundColor: "#fff",
          color: "#b8c4d2",
          display: 'flex',
          alignItems: 'center',
        }}
        direction="left"
        speed={50} // Adjust speed for better visibility
        pauseOnHover={true}
      >
        <div className="flex items-center space-x-4">
          <img src={img1} alt="Marquee Image 1" className="h-16" />
          <img src={img2} alt="Marquee Image 2" className="h-16" />
          <img src={img3} alt="Marquee Image 3" className="h-16" />
          <img src={img4} alt="Marquee Image 4" className="h-16" />
          <img src={img5} alt="Marquee Image 5" className="h-16" />
          <img src={img6} alt="Marquee Image 6" className="h-16" />
        </div>
      </Marquee>
    </div>
  );
}
