import React, { useState } from 'react';
import { 
  Menu, Search, Mic, Video, Bell, User, 
  ThumbsUp, ThumbsDown, Share2, Scissors, 
  MoreHorizontal, ListFilter, ChevronDown 
} from 'lucide-react';

// Assets
import audienceThumbnail from '@assets/generated_images/audience_in_a_conference_hall_with_a_woman_in_pink_standing_up.png';
import doctorAvatar from '@assets/generated_images/professional_headshot_of_a_male_doctor_with_glasses.png';
import femaleAvatar from '@assets/generated_images/generic_female_user_avatar.png';
import maleAvatar from '@assets/generated_images/generic_male_user_avatar.png';
import middleAgedAvatar from '@assets/generated_images/avatar_of_a_middle-aged_woman_with_short_hair.png';
import youngDarkHairAvatar from '@assets/generated_images/avatar_of_a_young_woman_with_long_dark_hair.png';
import glassesAvatar from '@assets/generated_images/avatar_of_a_woman_with_glasses.png';
import seniorAvatar from '@assets/generated_images/avatar_of_a_senior_woman.png';

// Mock Data for Comments
const INITIAL_COMMENTS = [
  {
    id: 1,
    user: "@shoshannamirecourt",
    time: "3 days ago",
    avatar: youngDarkHairAvatar,
    text: "Doc, you literally saved my life! I lost 64 pounds in just 2 months with this recipe and finally got my pre-diabetes under control. Seriously, thank you so much for the tip. 🥰",
    likes: 18,
    isLiked: false
  },
  {
    id: 2,
    user: "@rebeccacollins",
    time: "2 days ago",
    avatar: middleAgedAvatar,
    text: "Best video I've watched in months! 🙏 I'm a mom of two boys and I barely have time to breathe, let alone diet or hit the gym. I started the pink salt trick and boom—14 pounds gone in 10 days.",
    likes: 7,
    isLiked: false
  },
  {
    id: 3,
    user: "@marjoriewhitlock",
    time: "9 hours ago",
    avatar: seniorAvatar,
    text: "Has anyone else tried it for that stubborn menopause belly fat? It worked wonders for me! I'm heading into week three and so happy my shirts don't cling to my stomach anymore.",
    likes: 8,
    isLiked: false
  },
  {
    id: 4,
    user: "@eulaliaravenscroft",
    time: "3 days ago",
    avatar: glassesAvatar,
    text: "I tried so many gelatin tricks all over the internet that I didn't believe it at first. But then I tried this Red one and realized I was just making it wrong before! Down 26 pounds in 18 days. My husband can't keep his hands off my waist now",
    likes: 15,
    isLiked: false
  },
  {
    id: 5,
    user: "@michellecarter",
    time: "6 hours ago",
    avatar: femaleAvatar,
    text: "I dropped 25 pounds with this dessert just to fit into my wedding dress, and looking back at the pictures now, I realized it's the first time in years I've actually liked how I look in a photo.",
    likes: 9,
    isLiked: false
  },
  {
    id: 6,
    user: "@tamsinfairchild",
    time: "5 days ago",
    avatar: youngDarkHairAvatar,
    text: "I waited 30 days before saying anything about this trick... now I'm on day 35 and 34 pounds down, and my waist looks like it did in my 20s 😳",
    likes: 11,
    isLiked: false
  },
  {
    id: 7,
    user: "@corinneharlow",
    time: "5 days ago",
    avatar: middleAgedAvatar,
    text: "Everyone at work thinks I got lipo because of this red gelatin 😂",
    likes: 5,
    isLiked: false
  },
  {
    id: 8,
    user: "@jenniferanderson",
    time: "3 days ago",
    avatar: glassesAvatar,
    text: "All I'm gonna say is: Do it!! It's simple, everyone's got the ingredients at home, and it takes less than 5 minutes. I had to stop doing this red gelatin 'cause I was dropping weight way too fast and all my clothes were hanging off me.",
    likes: 12,
    isLiked: false
  }
];

export default function YoutubeClone() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [comments, setComments] = useState(INITIAL_COMMENTS);

  const toggleSubscribe = () => setIsSubscribed(!isSubscribed);
  
  const toggleLike = () => {
    if (isLiked) setIsLiked(false);
    else {
      setIsLiked(true);
      setIsDisliked(false);
    }
  };

  const toggleDislike = () => {
    if (isDisliked) setIsDisliked(false);
    else {
      setIsDisliked(true);
      setIsLiked(false);
    }
  };

  const toggleCommentLike = (id: number) => {
    setComments(comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          isLiked: !c.isLiked,
          likes: c.isLiked ? c.likes - 1 : c.likes + 1
        };
      }
      return c;
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full lg:block hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1 cursor-pointer" title="YouTube Home">
            <div className="relative flex items-center justify-center">
              <div className="bg-[#FF0000] rounded-lg w-8 h-5 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
            <span className="font-bold text-xl tracking-tighter relative bottom-[1px] font-sans-condensed">YouTube</span>
            <sup className="text-[10px] text-gray-500 ml-0.5">BR</sup>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-[720px] ml-10">
          <div className="flex flex-1 items-center">
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="yt-search-input"
            />
            <button className="yt-search-button">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Mic className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="md:hidden">
            <Search className="w-6 h-6" />
          </div>
          <div className="md:hidden">
            <Mic className="w-6 h-6" />
          </div>
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-[#CC0000] text-white text-[10px] px-1 rounded-full border-2 border-white">9+</span>
          </button>
          <button className="p-1 ml-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full text-white flex items-center justify-center text-sm font-medium">
              U
            </div>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mt-14 flex justify-center w-full">
        <div className="w-full max-w-[1280px] p-0 md:p-6 flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN (Video + Info) */}
          <div className="flex-1 w-full max-w-[900px] mx-auto">
            
            {/* VIDEO PLAYER */}
            <div className="aspect-video w-full bg-black relative group rounded-none md:rounded-xl overflow-hidden shadow-sm">
              <img 
                src={audienceThumbnail} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Custom Overlay from Screenshot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex flex-col items-center justify-center">
                   {/* Circular dark overlay */}
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-black/80 rounded-full flex flex-col items-center justify-center p-4 backdrop-blur-sm border border-white/10 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                     <p className="text-white font-bold text-xl md:text-2xl mb-2 text-center tracking-wider uppercase">CLICK HERE</p>
                     <div className="bg-[#FF0000] rounded-2xl w-16 h-12 md:w-20 md:h-14 flex items-center justify-center mb-2 shadow-lg">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                     </div>
                     <p className="text-white font-bold text-xl md:text-2xl mt-1 text-center tracking-wider uppercase">TO WATCH</p>
                  </div>
                  <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mt-[-20px] z-10 drop-shadow-lg text-stroke relative">
                    <span className="absolute inset-0 text-transparent pointer-events-none select-none" style={{ WebkitTextStroke: '2px black' }}>100 POUNDS</span>
                    <span className="relative text-white mix-blend-overlay">100 POUNDS</span>
                    <span className="absolute inset-0 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>100 POUNDS</span>
                  </h1>
                </div>
              </div>
              
              {/* Fake Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50 cursor-pointer group-hover:h-2 transition-all">
                <div className="h-full bg-[#FF0000] w-[35%] relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all"></div>
                </div>
              </div>
            </div>

            {/* VIDEO TITLE */}
            <div className="mt-4 px-4 md:px-0">
              <h1 className="text-xl md:text-2xl font-bold text-[#0F0F0F] leading-tight">
                The REAL REASON This Red Gelatin Makes You Burn Fat 24/7 — and Why BIG PHARMA Hides It at All Costs
              </h1>
            </div>

            {/* ACTION BAR */}
            <div className="mt-3 px-4 md:px-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Channel Info */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-3">
                  <img src={doctorAvatar} alt="Channel Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#0F0F0F] text-base">Dr. Eric Berg DC</span>
                    <span className="text-xs text-[#606060]">14.2 mi subscribers</span>
                  </div>
                </div>
                
                <button 
                  onClick={toggleSubscribe}
                  className={`ml-6 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSubscribed 
                    ? 'bg-[#F2F2F2] text-[#0F0F0F] hover:bg-[#E5E5E5]' 
                    : 'bg-[#0F0F0F] text-white hover:bg-black/80'
                  }`}
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="flex items-center bg-[#F2F2F2] rounded-full h-9">
                  <button 
                    onClick={toggleLike}
                    className="flex items-center gap-2 px-3 h-full hover:bg-[#E5E5E5] rounded-l-full border-r border-[#D9D9D9] transition-colors"
                  >
                    <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-black' : ''}`} />
                    <span className="text-sm font-medium">1.8K</span>
                  </button>
                  <button 
                    onClick={toggleDislike}
                    className="px-3 h-full hover:bg-[#E5E5E5] rounded-r-full transition-colors"
                  >
                    <ThumbsDown className={`w-5 h-5 ${isDisliked ? 'fill-black' : ''}`} />
                  </button>
                </div>

                <button className="yt-button gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>

                <button className="yt-button gap-2 hidden sm:flex">
                  <Scissors className="w-5 h-5" />
                  Clip
                </button>

                <button className="yt-icon-button bg-[#F2F2F2]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* DESCRIPTION BOX */}
            <div className="mt-4 mx-4 md:mx-0 bg-[#F2F2F2] rounded-xl p-3 text-sm cursor-pointer hover:bg-[#E5E5E5] transition-colors">
              <div className="flex gap-2 font-medium text-[#0F0F0F] mb-1">
                <span>16,028,111 views</span>
                <span>11 days ago</span>
              </div>
              <div className="text-[#0F0F0F] whitespace-pre-line">
                <span className="font-semibold">What's the right way to do the gelatin trick to lose weight fast and effortlessly?</span>
                <br/><br/>
                Today I'm going to show you not only the correct way to prepare this red gelatin recipe to help burn localized fat...
                <br/><br/>
                But also what happens inside your body when you eat this "bariatric-style" dessert...
                <br/><br/>
                And why the famous diets, workouts, and meds don't have any effect on your weight-loss journey.
                <br/><br/>
                This is your chance to replicate at home the same effect as slimming injections... but without rebound weight gain or loose skin!
                <br/><br/>
                Thanks for watching!
                <br/><br/>
                I hope this helps you understand better the truth that the pharmaceutical industry will never tell you. I'll see you in the next video.
              </div>
            </div>

            {/* COMMENTS SECTION */}
            <div className="mt-6 px-4 md:px-0">
              <div className="flex items-center gap-8 mb-6">
                <h2 className="text-xl font-bold">8 comments</h2>
                <button className="flex items-center gap-2 text-sm font-medium text-[#0F0F0F]">
                  <ListFilter className="w-5 h-5" />
                  Sort by
                </button>
              </div>

              <div className="space-y-6">
                {/* Add Comment Input (Visual Only) */}
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0">U</div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="w-full border-b border-gray-200 py-1 focus:border-black focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>

                {/* Comment List */}
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 group">
                    <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] font-semibold text-[#0F0F0F]">{comment.user}</span>
                        <span className="text-[12px] text-[#606060]">{comment.time}</span>
                      </div>
                      <p className="text-sm text-[#0F0F0F] leading-relaxed whitespace-pre-line">
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <button 
                          onClick={() => toggleCommentLike(comment.id)}
                          className="flex items-center gap-1.5 text-xs font-medium text-[#0F0F0F] hover:bg-gray-100 p-1.5 rounded-full -ml-1.5"
                        >
                          <ThumbsUp className={`w-4 h-4 ${comment.isLiked ? 'fill-black' : ''}`} />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-full">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                        <button className="text-xs font-semibold hover:bg-gray-100 px-3 py-1.5 rounded-full">
                          Reply
                        </button>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 rounded-full self-start transition-opacity">
                      <MoreHorizontal className="w-5 h-5 rotate-90" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Suggestions - REMOVED) */}
        </div>
      </main>
    </div>
  );
}
