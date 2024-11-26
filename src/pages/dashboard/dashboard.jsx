/* eslint-disable react/no-unescaped-entities */
import "./dashboard.scss";
import Wave2 from "../../assets/Wave2.png";
import Cover from "../../assets/Chawsiman.webp";
import { Toaster, toast } from "sonner";
import { useLocation } from "react-router-dom"; // Import useLocation
import { useEffect } from "react";

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.success) {
      toast.success(location.state.success); // Render the toast
    }
  }, [location.state]);

  return (
    <>
      <Toaster richColors />
      <div className="dashboard">
        <div className="wave-2">
          <img src={Wave2} alt="" />
        </div>
        <div className="dash-content">
          <div className="header-text">
            <h1>Dashboard</h1>
            <p>25th Nov 2024</p>
          </div>
          <div className="dash-split">
            <div className="left-dash">
              <div className="tracker-container">
                <div className="tracker-card total">
                  <h3>Total Of Book's</h3>
                  <h2>
                    121<span>book's</span>
                  </h2>
                </div>
                <div className="tracker-card members">
                  <h3>Total Of Member's</h3>
                  <h2>
                    32<span>member's</span>
                  </h2>
                </div>
                <div className="tracker-card borrowed">
                  <h3>Book's Borrowed Today</h3>
                  <h2>
                    16<span>book's</span>
                  </h2>
                </div>
              </div>
              <div className="popular-container">
                <h2>Popular Book's</h2>
                <div className="glass-popular">
                  <div className="book-dash">
                    <h3>This Week</h3>
                    <div className="book-dash-container">
                      <img src={Cover} alt="Book Cover" />
                    </div>
                    <div className="popular-text">
                      <h4>Chaswiman</h4>
                      <p>Tatsuki Fujimoto</p>
                    </div>
                  </div>
                  <div className="line-vertical"></div>
                  <div className="book-dash">
                    <h3>This Week</h3>
                    <div className="book-dash-container">
                      <img src={Cover} alt="Book Cover" />
                    </div>
                    <div className="popular-text">
                      <h4>Chaswiman</h4>
                      <p>Tatsuki Fujimoto</p>
                    </div>
                  </div>
                  <div className="line-vertical"></div>
                  <div className="book-dash">
                    <h3>This Week</h3>
                    <div className="book-dash-container">
                      <img src={Cover} alt="Book Cover" />
                    </div>
                    <div className="popular-text">
                      <h4>Chaswiman</h4>
                      <p>Tatsuki Fujimoto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-dash">
              <div className="dash-buttons">
                <button className="borrow-btn">
                  <box-icon type="solid" name="book-add" size="lg"></box-icon>
                  Borrow
                </button>
                <button className="return-btn">
                  Return
                  <box-icon type="solid" name="book-add" size="lg"></box-icon>
                </button>
              </div>
              <div className="ranking-container">
                <div className="rank-head">
                  <div className="circle"></div>
                  <h3>Point Ranking</h3>
                  <div className="circle"></div>
                </div>
                <div className="rank">
                  <p className="ranking">#1</p>
                  <p className="name">Korubi</p>
                  <p className="point">200</p>
                </div>
                <div className="line-rank"></div>
                <div className="rank">
                  <p className="ranking">#1</p>
                  <p className="name">Korubi</p>
                  <p className="point">200</p>
                </div>
                <div className="line-rank"></div>
                <div className="rank">
                  <p className="ranking">#1</p>
                  <p className="name">Korubi</p>
                  <p className="point">200</p>
                </div>
                <div className="line-rank"></div>
                <div className="rank">
                  <p className="ranking">#1</p>
                  <p className="name">Korubi</p>
                  <p className="point">200</p>
                </div>
                <div className="line-rank"></div>
                <div className="rank">
                  <p className="ranking">#1</p>
                  <p className="name">Korubi</p>
                  <p className="point">200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
