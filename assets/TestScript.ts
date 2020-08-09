const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  }

  start() {
    const joint = this.getComponent(cc.RevoluteJoint);
    joint.connectedBody = cc.find('Canvas/base').getComponent(cc.RigidBody);
    joint.apply();

    joint.connectedBody = null;
    joint.apply();
  }

  update(dt) {
    cc.log(this.node.position.toString());
  }
}
