// src/components/Overview.js
import React from 'react';

function Overview() {
  return (
    <section className="overview">
      <h1>Apa yang perlu di cek hari ini?</h1>
      <div className="cards">
        <div className="card order">
          <div>
            <i data-feather="check-circle"></i>
          </div>
          <span>6</span>
          <p>Pesanan Hari Ini</p>
        </div>
        <div className="card pending">
          <div>
            <i data-feather="clock"></i>
          </div>
          <span>2</span>
          <p>Pending</p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
