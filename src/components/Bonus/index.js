const Bonus = () => {
    return (
      <div>
        <section className="Bonus-container">
          <h2 className="BonusTitle">Me & Friends</h2>
          <p className="subBonus">The best times are spent with friends.</p>
          <div className="Bonus-anjay">
            <div className="Bonus-item">
              <iframe
                className="bonus-video"
                src="https://www.youtube.com/embed/f8HejkjLsNc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="bonus-name">One of My precious memories</div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Bonus;
  