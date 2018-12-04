export const mix = (superclass) => new MixinBuilder(superclass)

class MixinBuilder {  
  constructor(public superclass) {}

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass)
  }
}