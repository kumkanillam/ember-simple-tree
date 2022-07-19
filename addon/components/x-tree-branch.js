import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class XTreeBranchComponent extends Component {
  
  @action
   onLoad(model){
	   this.args.onLoad(model);
	}

}
