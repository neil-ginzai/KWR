// will soon move bonzitv's video lists inside this javascript file to declutter meat.js

// youtube url variables
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://youtu.be/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";


/*
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY"
*/

// the clusterfuck of video ids
let videoIdsCommercials = [
  youtube_url + "b2OUKjLzcEc",
  youtube_url + "Uyw-bne3G2A",
  youtube_url + "gcGI1f24eyM",
  youtube_url + "K0damuN_9bQ",
  youtube_url + "5ls7g9eH7ss",
  youtube_url + "hb59QZW2SCA",
  youtube_url + "VJs_VALzi_8",
  youtube_url + "GCA5CB5uUyA"
]
let videoIds4PM2430PM = [
  youtube_url + "n_sWTHQKr-s",
  youtube_url + "FdjXC4aDNrc",
  youtube_url + "oqwjsqLvaGA",
  youtube_url + "ewQeG4bfh7o",
  youtube_url + "J1xFJDSeHxI",
  youtube_url + "AJNF04k6hDU",
  youtube_url + "EXFJ1gUqSOI",
  youtube_url + "zvB3h2IKdYU",
  youtube_url + "ihDMzzMxsFY",
  youtube_url + "JdPibO28X6g",
  youtube_url + "BpJZAKy3-EI",
  youtube_url + "y281xhixx9I",
  youtube_url + "f-1tlzLYUE0",
  youtube_url + "LBapITUr878",
  youtube_url + "R7M2RiTgEO4",
  youtube_url + "hYC5FcjhowU",
  youtube_url + "PM2cT0GYs0k",
  youtube_url + "kX-TUNMguqQ",
  youtube_url + "CJjGRbm7AP0",
  youtube_url + "nUXNQk-GpXE",
  youtube_url + "pRIdTBDo5s0",
  youtube_url + "lnUnMD8avFo",
  youtube_url + "OHtNgbbZUHc",
  youtube_url + "IWeeGlqWjTo",
  youtube_url + "B-43bJpN9p0",
  youtube_url + "ZlJUN6ld7Uw",
  youtube_url + "cepnx5OtwMg",
  youtube_url + "CyYUtJWu67g",
  youtube_url + "kVPAH1SoJOs",
  youtube_url + "CSSucrEZru0",
  youtube_url + "voX77aqxMVM",
  youtube_url + "VMenL3FtjwY",
  youtube_url + "gMWMaYqMuvU",
  youtube_url + "9CivuYkHkdw",
  youtube_url + "nWjshODENSE",
  youtube_url + "wC85p4WwT7o",
  youtube_url + "-STfCX3_Dt8",
  youtube_url + "2npJbktaXas",
  youtube_url + "mW8HT3wTjtw",
  youtube_url + "aqJxAEc8I98",
  youtube_url + "7RTuOTLqNJg",
  youtube_url + "D-mxD6R0PZk",
  youtube_url + "gkpfOwxvP5Y",
  youtube_url + "MaOJiU7ICSs",
  youtube_url + "ldoCeoPnsr4",
  youtube_url + "kRtuL6PVM3M",
  youtube_url + "BxEn1br2hhA",
  youtube_url + "E7e2NbRTv34",
  youtube_url + "0Pw-W11hzaY",
  youtube_url + "fjOraqJJfdo",
  youtube_url + "-k2lYZmcyUs",
  youtube_url + "IpDx4Fw137U",
  youtube_url + "bIy7bGgPmu8",
  youtube_url + "wGFfIulM2aw",
  youtube_url + "xv3LBB6GAh4",
  youtube_url + "SLfbsnOG3lA",
  youtube_url + "YaRNqZT1QH4",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "WwnSgVJcGm8",
  youtube_url + "XEwg5dwLjng",
  youtube_url + "eYo8jusJkfA",
  youtube_url + "iIBI3vVcce0",
  youtube_url + "7K7gaKhkiVg",
  youtube_url + "vX5baryGnnk",
  youtube_url + "kEkmTUobm9A",
  youtube_url + "ynWOhlnFJWQ",
  youtube_url + "ofPNauMOvFU",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
];
let videoIds5PM = [
  youtube_url + "445gC5CYQfw"
];
let videoIds25MinutesofMSAgent = [
  youtube_url + "445gC5CYQfw"
];

// export variables
module.exports={
  youtube_url,
  youtube_tiny_url,
  youtube_shorts_url,
  youtube_embed_url,
  youtube_music_url,
  videoIdsCommercials,
  videoIds4PM2430PM,
  videoIds5PM,
  videoIds7PM,
  videoIds25MinutesofMSAgent
};