str = "ac,abc,abbc"

p str
p str.gsub(/ab?c/, "z")
p str.gsub(/ab*/, "y")
