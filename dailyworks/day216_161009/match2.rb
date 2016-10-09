str = "お腹がすいた、りんごが食べたい"

p str
p match = str.match(/お腹がすいた、(.+)が食べたい/)
p match[0]
p match[1]
