require_relative "05.rb"
strs = %w[paraparaparadise paragraph]
x = strs[0].chars.ngram(2)
y = strs[1].chars.ngram(2)

puts "union:\t#{x | y}"
puts "intersection:\t#{x & y}"
puts "diff:\t#{x - y}"
puts "X include 'se'?: #{x.include?(%w[s e])}"
puts "Y include 'se'?: #{y.include?(%w[s e])}"
