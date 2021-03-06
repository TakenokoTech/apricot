/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import DataSource, { AppInfo } from "../components/DataSource";
import { getRepositories, initAccount, RepoItem } from "../components/GithubRepository";
import SessionStorage from "../components/SessionStorage";
import { getParam, deleteQuery } from "../components/Util";
import Detail from "./container/Detail";
import Header from "./container/Header";
import History from "./container/History";
import ReloadDialog from "./container/ReloadDialog";
import Summary from "./container/Summary";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

interface HomeProps extends WithStyles<typeof styles> {
  classes: any;
}

interface HomeState {
  appInfo: AppInfo;
  repos: RepoItem[];
  isLoading: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = { appInfo: DataSource.initAppInfo, repos: [], isLoading: false };
  }

  componentDidMount() {
    (async () => this.init())();
  }

  init = async () => {
    const { code } = getParam();
    deleteQuery("code");

    if (getParam().error) return;
    if (getParam().repoName) SessionStorage.setLastRepo(getParam().repoName);
    if (getParam().commit) SessionStorage.setLastCommit(getParam().commit);
    this.setState({ isLoading: true });

    if ((await initAccount(code)) === false) {
      this.setState({ isLoading: false });
      return;
    }

    const repos = await getRepositories();
    const repo = SessionStorage.getLastRepo() || repos[0].name;
    const commit = SessionStorage.getLastCommit();
    const appInfo = await DataSource.getAppInfo(repo, commit);
    this.setState({ repos, appInfo, isLoading: false });
  };

  changeRepo = async (repoName: string) => {
    const newAppInfo = await DataSource.getAppInfo(repoName);
    this.setState({ appInfo: newAppInfo });
    SessionStorage.setLastRepo(newAppInfo.appName);
  };

  changeItem = async (commit: string) => {
    const { appInfo } = this.state;
    const newAppInfo = await DataSource.getAppInfo(appInfo.appName, commit);
    this.setState({ appInfo: newAppInfo });
    SessionStorage.setLastCommit(commit);
  };

  render() {
    const { classes } = this.props;
    const openDialog = !SessionStorage.getToken() || !SessionStorage.getUser() || !SessionStorage.getRepos();

    return (
      <div className={classes.root}>
        <Header appInfo={this.state.appInfo} repos={this.state.repos} changeRepo={this.changeRepo} />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={9} xs={12}>
              <Summary appInfo={this.state.appInfo} />
              <Detail appInfo={this.state.appInfo} />
            </Grid>
            <Grid item md={3} xs={12}>
              <History appInfo={this.state.appInfo} changeItem={this.changeItem} />
            </Grid>
          </Grid>
        </Container>
        <ReloadDialog isLoading={this.state.isLoading} openDialog={openDialog} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
