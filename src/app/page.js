import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div id="game" className='rounded-lg'>
      <h1 className='font-bold text-black text-4xl p-4 text-center'>Simple Text-based RPG</h1>
        <div id="stats">
          <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
          <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
          <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
        </div>
        <div id="controls" className='flex justify-center items-center'>
          <button id="button1" className='rounded-lg mx-1'>Go to store</button>
          <button id="button2" className='rounded-lg mx-1'>Go to cave</button>
          <button id="button3" className='rounded-lg mx-1'>Fight dragon</button>
        </div>
        <div id="monsterStats">
          <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
          <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
        </div>
        <div id="text">
          Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
        </div>
      </div>
        <Script src="./script.js" strategy="beforeInteractive" />
    </main>
  );
}
