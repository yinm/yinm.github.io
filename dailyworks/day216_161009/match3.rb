p str = "pane"
p str.match(/p[aiAI]ne/)

p str = "pine"
p str.match(/p[aiAI]ne/)

p str = "pAne"
p str.match(/p[aiAI]ne/)

p str = "pune"
p str.match(/p[aiAI]ne/)

puts "否定形-------------------"
p str = "pAne"
p str.match(/p[^aiAI]ne/)

p str = "pune"
p str.match(/p[^aiAI]ne/)
