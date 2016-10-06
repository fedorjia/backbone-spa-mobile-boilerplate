/***
 * Generic Modal
 */
class Modal extends Backbone.View {

  render() {
      this.$el.addClass('modal');
      $('body').append(this.$el);

      $('.modal-mask').velocity({
        opacity: 0.8,
        display: 'block'
      }, {
        display: 'block',
        duration: 200,
        complete: function() {
          this.didAppear();
        }.bind(this)
      });
      return this;
  }

  remove() {
      this.$el.remove();
  }

  dismiss() {
      $('.modal-mask').velocity('fadeOut', 400);
      this.didDisappear();
  }

  /***** life cycle  ****/

  didDisappear() {
     this.$el.velocity('fadeOut', 400, function() {
        this.remove();
     }.bind(this));
  }

  didAppear() {
      this.$el.velocity('fadeIn');
  }
}

export default Modal;