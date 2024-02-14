function getEmoji(name, gender) {
  const emojiMap = {
    male: {
      a: "😎",
      b: "🕺",
      c: "🤠",
      d: "🤵",
      e: "🎩",
      f: "👑",
      g: "🧔",
      h: "👨‍🎨",
      i: "👨‍🚒",
      j: "👨‍🍳",
      k: "👨‍🎤",
      l: "🧔‍♂️",
      m: "👨‍💻",
      n: "🕶️",
      o: "🧔‍♂️",
      p: "🦸‍♂️",
      q: "👮‍♂️",
      r: "🧙‍♂️",
      s: "👨‍🔧",
      t: "🧘‍♂️",
      u: "👨‍🚀",
      v: "👷‍♂️",
      w: "👨‍⚕️",
      x: "👨‍🌾",
      y: "🦹‍♂️",
      z: "🤺",
      default: "👨",
    },
    female: {
      a: "😊",
      b: "💃",
      c: "👩‍🎨",
      d: "👩‍🚒",
      e: "👸",
      f: "👩‍🎤",
      g: "🧜‍♀️",
      h: "🧙‍♀️",
      i: "👩‍💻",
      j: "🕶️",
      k: "👩‍🔧",
      l: "🧘‍♀️",
      m: "👩‍🚀",
      n: "👩‍⚕️",
      o: "👩‍🌾",
      p: "🧝‍♀️",
      q: "🧚‍♀️",
      r: "👰",
      s: "🦸‍♀️",
      t: "👩‍🏫",
      u: "👩‍🎓",
      v: "👩‍🔬",
      w: "👩‍💼",
      x: "🦹‍♀️",
      y: "🤸‍♀️",
      z: "🧗‍♀️",
      default: "👩",
    },
  };

  const firstLetter = name.charAt(0).toLowerCase();
  const emojiSet = emojiMap[gender.toLowerCase()] || emojiMap.default;

  return emojiSet[firstLetter] || emojiSet.default;
}

export default getEmoji;
