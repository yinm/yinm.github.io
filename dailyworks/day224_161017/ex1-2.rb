Bar = Class.new
Foo = Class.new(Bar) do |c|
  def foo
    p "foo!!"
  end
end
