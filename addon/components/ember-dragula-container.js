import Component from '@glimmer/component';
import { inject as service } from '@ember/service'
import { action } from '@ember/object';

export default class EmberDragulaContainer extends Component {
  @service dragula;

  @action
  onInsert(element) {
    this.dragula.drake.containers.push(element);
  }

  @action
  onDestroy(element) {
    this.dragula.drake.containers.splice(this.drake.containers.indexOf(element), 1);
  }
}