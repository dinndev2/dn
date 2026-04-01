import { useEffect, useRef, useState } from 'react';
import { DEMO_EVENTS } from '../helpers/data';
import ReactIcon from "./icons/ReactIcon";
import NodeIcon from "./icons/NodeIcon";

export const ColaSection = () => {
  const canvasXRef = useRef(null);
  const canvasYRef = useRef(null);
  const cursorXRef = useRef(null);
  const cursorYRef = useRef(null);
  
  const [ghostCarets, setGhostCarets] = useState({}); 
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  const getSafeContext = (canvas) => {
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;

    if (canvas.width !== rect.width * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
    }

    const ctx = canvas.getContext('2d');
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    return { ctx, w: rect.width, h: rect.height };
  };

  const drawCursor = (ctx, x, y, label, color) => {
    ctx.save();
    ctx.shadowBlur = 4;
    ctx.shadowColor = "rgba(0,0,0,0.15)";
    
    ctx.fillStyle = color;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 12, y + 8);
    ctx.lineTo(x + 5, y + 10);
    ctx.lineTo(x + 8, y + 16);
    ctx.lineTo(x + 5, y + 18);
    ctx.lineTo(x + 2, y + 11);
    ctx.lineTo(x, y + 14);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.font = "bold 10px Inter, sans-serif";
    const textWidth = ctx.measureText(label).width;
    ctx.fillStyle = color;
    ctx.fillRect(x, y + 22, textWidth + 10, 15);
    ctx.fillStyle = "white";
    ctx.fillText(label, x + 5, y + 33);
    ctx.restore();
  };

  useEffect(() => {
    let animationFrameId;
    let startTime = null;

    const runFrame = (now) => {
      const resX = getSafeContext(canvasXRef.current);
      const resY = getSafeContext(canvasYRef.current);
      const resCurX = getSafeContext(cursorXRef.current);
      const resCurY = getSafeContext(cursorYRef.current);

      if (!resX || !resY || !resCurX || !resCurY) {
        animationFrameId = requestAnimationFrame(runFrame);
        return;
      }

      if (!startTime) startTime = now;
      const elapsed = now - startTime;

      resCurX.ctx.clearRect(0, 0, resX.w, resX.h);
      resCurY.ctx.clearRect(0, 0, resY.w, resY.h);
      
      const currentIndex = DEMO_EVENTS.findLastIndex(e => e.delay <= elapsed);
      const currentEvent = DEMO_EVENTS[currentIndex];
      const nextEvent = DEMO_EVENTS[currentIndex + 1];

      if (currentEvent) {
        let drawX = (currentEvent.x / 100) * resX.w;
        let drawY = (currentEvent.y / 100) * resX.h;

        if (nextEvent && currentEvent.type !== 'stop') {
          const ratio = Math.min((elapsed - currentEvent.delay) / (nextEvent.delay - currentEvent.delay), 1);
          const nextX = (nextEvent.x / 100) * resX.w;
          const nextY = (nextEvent.y / 100) * resX.h;
          drawX += (nextX - drawX) * ratio;
          drawY += (nextY - drawY) * ratio;
        }

        [resX.ctx, resY.ctx].forEach((ctx, idx) => {
          if (currentEvent.type === 'start' && !currentEvent.played) {
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            if (idx === 1) currentEvent.played = true; 
          } 
          else if (currentEvent.type === 'draw') {
            ctx.lineWidth = currentEvent.size || 2.5;
            ctx.strokeStyle = currentEvent.color || "black";
            ctx.lineTo(drawX, drawY);
            ctx.stroke();
          } 
          else if (currentEvent.type === 'write' && !currentEvent.played) {
            ctx.font = "bold 14px Inter, sans-serif";
            ctx.fillStyle = currentEvent.color || "#4F46E5";
            ctx.fillText(currentEvent.text, drawX, drawY);
            if (idx === 1) currentEvent.played = true;
          }
        });

        const label = currentEvent.user;
        const color = currentEvent.user === 'Creative X' ? 'black' : '#2563eb';
        drawCursor(resCurX.ctx, drawX, drawY, label, color);
        drawCursor(resCurY.ctx, drawX, drawY, label, color);

        if (currentEvent.type === 'typing' || nextEvent?.type === 'typing') {
          setGhostCarets({
            [currentEvent.user]: { x: drawX, y: drawY, text: currentEvent.text || nextEvent?.text || "" }
          });
        } else {
          setGhostCarets({});
        }
      }

      const lastEvent = DEMO_EVENTS[DEMO_EVENTS.length - 1];
      if (elapsed > (lastEvent?.delay || 0) + 3000) {
        resX.ctx.clearRect(0, 0, resX.w, resX.h);
        resY.ctx.clearRect(0, 0, resY.w, resY.h);
        setGhostCarets({});
        DEMO_EVENTS.forEach(e => e.played = false);
        startTime = now;
      }

      animationFrameId = requestAnimationFrame(runFrame);
    };

    animationFrameId = requestAnimationFrame(runFrame);
    return () => {
      cancelAnimationFrame(animationFrameId);
      DEMO_EVENTS.forEach(e => e.played = false);
    };
  }, [dpr]);

  return (
    <div className="min-h-screen krona-one-bold w-full bg-white flex flex-col font-sans overflow-hidden">
      {/* --- HEADER --- */}
      <div className="flex-1 flex flex-col justify-center items-center text-center p-8 gap-6">
        <div className="flex flex-col items-center gap-2">

           <div className="bg-slate-900 text-[9px] font-black text-white px-4 py-1.5 rounded-full flex items-center gap-2 tracking-[0.2em] shadow-lg">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              SYSTEM_ACTIVE // STABLE
           </div>
           <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase italic">
            Collaborative Engine
          </h1>
        </div>
        
        <p className="text-slate-500 max-w-lg text-sm lg:text-lg leading-relaxed font-medium">
          A real-time workspace for teams to brainstorm using <span className="text-black font-bold">WebSockets</span> and <span className="text-black font-bold">React</span>.
        </p>

        <a 
          href="https://cola.fly.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 text-xs px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-300"
        >
          Launch Live Demo
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <div className="flex gap-8 items-center justify-center pt-4 grayscale opacity-60">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black"><ReactIcon /> React</div>
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black"><NodeIcon /> Node.js</div>
        </div>
      </div>

      {/* --- CANVAS SECTION --- */}
      <div className="flex-[2] bg-slate-50 border-t border-dashed border-slate-200 p-4 lg:p-12 relative">
        
        {/* --- THE CONNECTED CONTAINER --- */}
        <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">X</div>
              <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">Y</div>
            </div>
            <div className="h-4 w-[1px] bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2 Peers Connected</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              12ms Latency
            </span>
            <div className="bg-slate-100 text-[9px] font-black text-slate-500 px-2 py-1 rounded-md uppercase tracking-tighter">
              v2.0.4-stable
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 h-full max-w-7xl mx-auto">
          
          {/* USER X */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Workspace_Alpha</span>
              <div className="h-[1px] flex-1 bg-slate-200" />
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-3xl relative overflow-hidden shadow-sm min-h-[400px]">
              <canvas ref={canvasXRef} className="absolute inset-0 w-full h-full z-10" />
              <canvas ref={cursorXRef} className="absolute inset-0 w-full h-full z-20 pointer-events-none" />
            </div>
          </div>

          {/* USER Y */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 justify-end">
              <div className="h-[1px] flex-1 bg-slate-200" />
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Workspace_Beta</span>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-3xl relative overflow-hidden shadow-sm min-h-[400px]">
              <canvas ref={canvasYRef} className="absolute inset-0 w-full h-full z-10" />
              <canvas ref={cursorYRef} className="absolute inset-0 w-full h-full z-20 pointer-events-none" />
              
              {Object.entries(ghostCarets).map(([id, caret]) => (
                caret && (
                  <div 
                    key={id}
                    className="absolute pointer-events-none text-blue-600 text-[10px] font-bold border-l-2 border-blue-500 pl-2 z-30 transition-all duration-75"
                    style={{ left: caret.x, top: caret.y + 15 }}
                  >
                    {caret.text}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};