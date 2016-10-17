class ParentClass
  def this_is_method(n)
    puts "#{n.to_s}回うんこしたいよー"
  end
end

class ChildClass << ParentClass
  def this_is_method(n)
    m = n + 1
    super(m)
  end
end
