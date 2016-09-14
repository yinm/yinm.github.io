# hash
sum = 0
outcome = {
  "join" => 1000,
  "shopping" => 2000,
  "food" => 4000
}

outcome.each do |item, price|
  puts "#{item}: #{price}yen"
  sum += price
end
puts "合計で、#{sum}yen"

# reading file
file = File.open('sample.txt')
file.each_line do |line|
  print line
end
file.close

# auto close file
file = File.open('sample.txt') do |file|
  file.each_line do |line|
    print line
  end
end

# Array#sort
a = [3, 4, 5, 2, 6, 1, 7]

sorted = a.sort
print "#{sorted} \n"

# asc
sorted = a.sort do |a, b|
  a <=> b
end
print "#{sorted} \n"

# desc
sorted = a.sort do |a, b|
  b <=> a
end
print "#{sorted} \n"

# string length asc
str_a = ["udon", "yakisoba", "somen", "ra---men"]
sorted = str_a.sort do |a, b|
  a.length <=> b.length
end
print "#{sorted} \n"

# creating block method
def total(from, to)
  result = 0
  from.upto(to) do |num|
    if block_given?
      result += yield(num)
    else
      result += num
    end
  end

  return result
end

p total(1, 10)
p total(1, 10) { |num| num ** 2 }

# yield
def block_args
  yield()
end
block_args do |a|
  p [a]
end

def block_arg
  yield(1, 2, 3)
end
block_arg do |a|
  p a
end

def block_arg
  yield(1, 2, 3)
end
block_arg do | *a |
  p a
end

# proc
def total2(from, to, &block)
  result = 0
  from.upto(to) do |num|
    if block
      result += block.call(num)
    else
      result += num
    end
  end

  return result
end
