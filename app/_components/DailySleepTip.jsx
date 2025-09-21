const sleepTips = [
  {
    title: "Stick to a Schedule",
    tip: "Go to bed and wake up at the same time every day, even on weekends, to regulate your body clock."
  },
  {
    title: "Create a Wind-Down Routine",
    tip: "Establish a calming pre-sleep ritual like reading, meditating, or taking a warm bath to signal your body it’s time to rest."
  },
  {
    title: "Limit Screen Time Before Bed",
    tip: "Avoid phones, tablets, and TVs at least an hour before bed to reduce blue light exposure and improve melatonin production."
  },
  {
    title: "Keep Your Room Cool and Dark",
    tip: "A cool, dark environment helps signal to your body that it’s time to sleep. Try blackout curtains or an eye mask."
  },
  {
    title: "Avoid Caffeine in the Evening",
    tip: "Caffeine can stay in your system for hours. Avoid coffee, tea, or soda after mid-afternoon."
  },
  {
    title: "Limit Naps During the Day",
    tip: "If you need to nap, keep it short—20 to 30 minutes—and avoid napping late in the day."
  },
  {
    title: "Use Your Bed Only for Sleep",
    tip: "Train your brain to associate your bed with sleep, not work, TV, or scrolling."
  },
  {
    title: "Practice Deep Breathing",
    tip: "Try deep breathing exercises or mindfulness meditation to relax your mind and body before bed."
  },
  {
    title: "Stay Active During the Day",
    tip: "Regular physical activity helps you fall asleep faster and enjoy deeper sleep, but avoid exercising too late."
  },
  {
    title: "Watch What You Eat Before Bed",
    tip: "Avoid heavy meals, spicy foods, or too much liquid before bedtime to prevent discomfort or waking up at night."
  },
  {
    title: "Set a Worry Time",
    tip: "If your mind races at night, set aside a specific time earlier in the day to process your thoughts and worries."
  },
  {
    title: "Reduce Noise with Soundscapes",
    tip: "Use white noise, soft music, or calming nature sounds to block out disruptive noises and ease into sleep."
  },
  {
    title: "Get Natural Light in the Morning",
    tip: "Exposure to natural light in the morning helps reset your circadian rhythm and boosts alertness."
  },
  {
    title: "Avoid Alcohol Before Bed",
    tip: "Alcohol can disrupt your sleep cycle and reduce sleep quality, even if it helps you fall asleep faster."
  },
  {
    title: "Be Consistent with Your Sleep Space",
    tip: "Create a cozy, clean, and dedicated sleep environment that your brain associates with rest."
  }
];

export default function DailySleepTip() {
   
  var num=Math.random().toString().slice(2,4)
 
if(num>15){
    var num=Math.random().toString().slice(2,3)
}
    console.log(num)
  return (
    <div className="bg-slate-800 animate-bounce text-white p-8 rounded-2xl max-w-4xl mx-auto">
      <div className="lg:flex  items-center justify-between">
        
        <div className="flex-1 pr-8">
          <p className="text-[#fcc390] font-bold text-md  tracking-wide uppercase mb-4">
            TIP OF THE DAY
          </p>
          <h2 className="text-2xl font-bold mb-6 leading-tight">
            {sleepTips[num]?.title}
          </h2>
          <p className="text-gray-300 text-md mb-5 leading-relaxed">
            {sleepTips[num]?.tip}
          </p>
        </div>
        
       
        <div className="flex-shrink-0">
          <img className=' w-70 rounded-4xl' src="/13404325_5198912.jpg"/>
        </div>
      </div>
    </div>
  );
};

