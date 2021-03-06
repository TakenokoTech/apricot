/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */

import { Chip } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import React from "react";
import { AppInfo, getZipFilenames } from "../../components/DataSource";
import { getArtifactUrl } from "../../components/GithubRepository";
import QrUtil from "../../components/QrUtil";
import SessionStorage from "../../components/SessionStorage";

interface DetailProps {
  appInfo: AppInfo;
}
interface DetailState {
  name: string;
  artifactUrl: string;
  qrUrl: string;
}

export default class Detail extends React.Component<DetailProps, DetailState> {
  constructor(props: { appInfo: AppInfo }) {
    super(props);

    this.state = {
      name: "",
      artifactUrl: "",
      qrUrl: "",
    };
  }

  componentDidUpdate(prevProps: DetailProps, prevState: DetailState) {
    if (this.props.appInfo.text.commit !== prevProps.appInfo.text.commit) {
      const name = this.props.appInfo.artifact?.[0]?.name || "";
      const artifactUrl = this.props.appInfo.artifact?.[0]?.url || "";
      const qrUrl = `${location.protocol}//${location.host}?repoName=${this.props.appInfo.appName}&commit=${this.props.appInfo.text.commit}`;
      this.updateArtifactUrl(name, artifactUrl, qrUrl);
    }
  }

  onCkickLink = async () => {
    const url = await getArtifactUrl(this.state.artifactUrl);
    const link = document.createElement("a");
    link.download = this.state.name;
    link.href = url;
    link.click();
    // getZipFilenames(url);
  };

  updateArtifactUrl = (name: string, artifactUrl: string, qrUrl: string) => {
    // console.log(name);
    // console.log(artifactUrl);
    // console.log(qrUrl);
    this.setState({ artifactUrl, qrUrl });
  };

  render() {
    const { uploadDate, text, link } = this.props.appInfo || {};

    function FormRow(args: { value1: string; value2: string; link: string }) {
      return (
        <Box p={1}>
          <Grid container item xs={12} style={{ wordWrap: "break-word" }}>
            <Grid item xs={5} sm={6}>
              <Typography variant="body1">
                <b>{args.value1}</b>
              </Typography>
            </Grid>
            <Grid item xs={7} sm={6}>
              <Typography variant="body1">{args.link ? <Link href={args.link}>{args.value2}</Link> : args.value2}</Typography>
            </Grid>
          </Grid>
        </Box>
      );
    }

    return (
      <Paper elevation={3}>
        <Box p={3} m={1}>
          <Grid container spacing={3}>
            <Box p={1} />
            <Grid container>
              <Grid item xs={1} sm={2} />
              <Grid item xs={12} sm={4}>
                <Box display="flex" justifyContent="center">
                  <canvas style={{ padding: "8px 32px" }} ref={(el) => QrUtil.renderQR(el, this.state.qrUrl)} width="160" height="160" />
                </Box>
                <Grid container justify="center" spacing={1}>
                  {this.props.appInfo?.artifact.map((it, i) => (
                    <Grid item key={i}>
                      <Chip
                        label={it.name}
                        onClick={() => this.updateArtifactUrl(it.name, it.url, this.state.qrUrl)}
                        variant={this.state.artifactUrl === it.url ? "default" : "outlined"}
                        color="secondary"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center" css={{ height: "100%" }}>
                  <Box flexGrow={1}>
                    <Box py={1} pr={2}>
                      QRコードまたはファイルから端末にインストールできます。
                    </Box>
                    <Box py={1} pr={2} display="flex" justifyContent="flex-end">
                      <Button variant="contained" color="secondary" startIcon={<ArrowDownward />} onClick={this.onCkickLink}>
                        Download
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={1} sm={2} />
            </Grid>
            <Box p={2} />
            <Divider style={{ width: "100%" }} />
            <Box p={3} />
            <Grid container spacing={1}>
              <Grid item xs={1} sm={2} />
              <Grid item xs={12} sm={8}>
                <FormRow value1="Upload Date" value2={uploadDate} link={null} />
                <FormRow value1="Repository" value2={text?.repository} link={link?.repository} />
                <FormRow value1="Brunch" value2={text?.branch} link={link?.branch} />
                <FormRow value1="Commit" value2={text?.commit.substring(0, 6)} link={link?.commit} />
                <FormRow value1="Log" value2={text?.log} link={link?.log} />
              </Grid>
              <Grid item xs={1} sm={2} />
            </Grid>
            <Box p={3} />
          </Grid>
        </Box>
      </Paper>
    );
  }
}
