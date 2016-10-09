str = "abc,adc,aec"

p str
p str.gsub(/a.c/, "z")

str = "aefefc"

p str
p str.gsub(/a.+c/, "y")
