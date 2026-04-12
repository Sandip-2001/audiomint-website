import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="glow-1"></div>

      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" alt="logo" width="40" />
          <strong style={{ fontSize: "1.2rem" }}>AudioMint</strong>
        </div>
        <a href="mailto: sandip.tint.2020@gmail.com" className="btn-sub">
          Support
        </a>
      </nav>

      <section className="hero">
        <div className="badge">v2.0.1 Now Available</div>
        <h1>
          Seamless audio pipelines, <br />{" "}
          <span className="gradient-text">Built for your desktop.</span>
        </h1>
        <p
          style={{
            color: "#888",
            maxWidth: "650px",
            margin: "20px auto",
            fontSize: "1.1rem",
          }}
        >
          The ultimate audio bridge. Route high-fidelity audio from any Chrome
          tab to your speakers, headphones, or virtual mixers with{" "}
          <strong>zero latency</strong>.
        </p>

        <div className="download-box">
          <a
            href="https://github.com/Sandip-2001/audiomint-releases/releases/download/v2.0.1/AudioMint-2.0.0-arm64.dmg"
            className="btn-main"
          >
            Download for Apple Silicon Macs (arm64)
          </a>
          <a
            href="https://github.com/Sandip-2001/audiomint-releases/releases/download/v2.0.1/AudioMint.Setup.2.0.0.exe"
            className="btn-main"
          >
            Download for Windows (x64)
          </a>
          <div style={{ marginTop: "10px", display: "flex", gap: "20px" }}>
            <a href="#setup" className="btn-sub">
              View Setup Guide
            </a>
          </div>
        </div>
      </section>
      <section className="extension-section" id="setup">
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "white", marginBottom: "15px" }}>
            The Browser Companion
          </h2>
          <p style={{ color: "#aaa", fontSize: "0.95rem", lineHeight: "1.6" }}>
            To capture audio from your browser, you'll need the{" "}
            <strong>AudioMint Extension</strong>. It works as a secure bridge,
            sending tab audio directly to the desktop app via a local WebSocket.
          </p>
          <div style={{ marginTop: "25px" }}>
            <button
              className="btn-sub"
              style={{
                border: "1px solid #444",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              Coming Soon to Chrome Web Store
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 0.5,
            background: "rgba(0,243,255,0.1)",
            padding: "20px",
            borderRadius: "20px",
            border: "1px dashed var(--neon-blue)",
          }}
        >
          <code style={{ color: "var(--neon-blue)", fontSize: "0.8rem" }}>
            {"// Local Connection"}
            <br />
            ws://127.0.0.1:8766
            <br />
            Status: Ready
          </code>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Performance
          </span>
          <h3 style={{ color: "var(--neon-blue)" }}>Sub-5ms Latency</h3>
          <p>
            Powered by high-speed local WebSockets and hardware-accelerated
            buffers for real-time monitoring.
          </p>
        </div>
        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Architecture
          </span>
          <h3 style={{ color: "var(--neon-purple)" }}>Dynamic Patchbay</h3>
          <p>
            A visual, node-based matrix that allows you to route any browser
            source to any physical or virtual output.
          </p>
        </div>
        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Control
          </span>
          <h3 style={{ color: "white" }}>Isolated Sandboxing</h3>
          <p>
            Capture specific browser tabs without bleeding audio from other
            system applications or notifications.
          </p>
        </div>

        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Fidelity
          </span>
          <h3 style={{ color: "var(--neon-blue)" }}>PCM Lossless Audio</h3>
          <p>
            Transfers raw 48kHz/24-bit audio streams directly from the Chrome
            engine without compression or artifacts.
          </p>
        </div>
        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "var(--neon-blue)",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Core Tech
          </span>
          <h3 style={{ color: "var(--neon-purple)" }}>Worker Persistence</h3>
          <p>
            Proprietary heartbeat logic prevents Chrome from throttling the
            background service worker during long sessions.
          </p>
        </div>
        <div className="card">
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Security
          </span>
          <h3 style={{ color: "var(--neon-purple)" }}>Zero-Cloud Privacy</h3>
          <p>
            Architecture built on local-only protocols. No external pings, no
            tracking, and no data telemetry.
          </p>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "50px", color: "#444" }}>
        <p>
          © 2026 AudioMint •{" "}
          <a href="/privacy.html" className="btn-sub">
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
