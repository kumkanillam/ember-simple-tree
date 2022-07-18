import Component from '@glimmer/component';
import { action } from '@ember/object';
import { get, set } from '@ember/object';

export default class XTreeBranchComponent extends Component {
  get loadMoreText() {
	if(this.args.model.length !=0){
		return this.args.model[0].loadMoreText;
	}
  }
   
  @action
   loadingNext(modell){
	   this.args.onLoad(modell);
	}

}
