class ThisIsClass
  def ThisIsClass.this_is_method
    puth 'うんこしたいよー'
  end
end

class ThisIsClass
  def self.this_is_method
    puth 'うんこしたいよー'
  end
end

class ThisIsClass
  class << ThisIsClass
    def this_is_method
      puth 'うんこしたいよー'
    end
  end
end

class ThisIsClass
  class << self
    def this_is_method
      puth 'うんこしたいよー'
    end
  end
end
