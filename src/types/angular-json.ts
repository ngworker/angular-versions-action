export interface AngularJSON {
  projects: {
    [project: string]: {
      projectType: string;
      architect: {
        build: {builder: string};
      };
    };
  };
}
