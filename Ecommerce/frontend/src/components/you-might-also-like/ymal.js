import React from 'react';
import Roblox from '../../assets/images/Roblox.png';
import PSS from '../../assets/images/PSS.png';
import Spotify from '../../assets/images/Spotify.png';

function ymal() {
  return (

    <div>
    <div style={{ marginTop: 25 }}>
      <h2
        style={{
          fontSize: 12,
          fontWeight: 700,
        }}
      >
        You might also like
      </h2>
    </div>
    <div>
      <img
        src={PSS}
        alt=""
        style={{ borderRadius: 15, padding: 5 }}
      />

      <img
        src={Roblox}
        alt=""
        style={{ borderRadius: 15, padding: 5 }}
      />
      <img
        src={Spotify}
        alt=""
        style={{ borderRadius: 15, padding: 5 }}
      />
    </div>
  </div>
  )
}

export default ymal