interface Window {}

// Project type mixins.
declare namespace pc {
  export interface PcScript {
    scriptAttribute: boolean;
  }

  interface ScriptComponent {
    pcScript?: PcScript;
  }
}
