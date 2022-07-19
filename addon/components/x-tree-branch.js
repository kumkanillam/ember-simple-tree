import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class XTreeBranchComponent extends Component {
  
  @action
   onLoad(modell){
	   this.args.onLoad(modell);
	}

}
