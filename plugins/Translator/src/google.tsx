export const iso = [
    "auto", "am", "ar", "ay", "as", "ak", "az",
    "be", "bg", "bm", "bn", "co", "cs", "bs", "da", "ca", "ca",
    "de", "ee", "dv", "dv", "dv", "en", "el", "et", "eo", "eu", "es", "es", "fi",
    "fr", "fa", "ga", "gl", "gn", "fy", "gu", "gd", "gd", "ha", "hr",
    "he", "hi", "ht", "ht", "hy", "id", "hu", "ig", "is", "it", "ka",
    "jv", "ja", "ko", "kk", "kn", "af", "km", "cy", "ku", "ky", "ky",
    "la", "lb", "lb", "lg", "lo", "lv", "ln", "lt", "mg", "mk", "ml",
    "mi", "mr", "nb", "mn", "my", "mt", "ne", "ms", "nl", "nl", "ny", "ny", "ny",
    "no", "om", "or", "pa", "pa", "pl", "qu", "ps", "ps", "ru", "sa", "ro", "ro", "ro",
    "sl", "rw", "sk", "si", "si", "sm", "sn", "so", "sr", "sq", "sw",
    "st", "sv", "su", "ta", "tg", "te", "tl", "tk", "ti", "th",
    "ts", "sd", "pt", "tw", "tr", "tt", "ur", "uk", "ug", "ug", "uz",
    "vi", "yi", "xh", "zh-tw", "zh-cn", "zu", "yo"
]

export const translate = async (text: string, from: string, to: string) => {
    if (!iso.find(i => i === from) && !iso.find(i => i === to)) throw new Error("Invalid Lang!")
    const getData = await fetch("https://translate.googleapis.com/translate_a/single"
        + `?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`)
    if (!getData.ok) throw new Error("Error!")
    const data = await getData.json()
    if (!data) throw new Error("Error!")
    return data && data[0] && data[0][0] && data[0].map(s => s[0]).join("")
}