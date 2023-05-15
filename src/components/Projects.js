import React, { Component, useState } from "react";
// import { useState } from "react";

import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      tab: 1,
    };
  }

  render() {
    const changeTab = (event, input) => {
      this.setState({ tab: input });
    };
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: 700,
              }}
            >
              {sectionName}
            </span>
          </h1>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              fontSize: "2.5rem",
              fontWeight: 500,
              justifyContent: "space-around",
              marginBottom: "2rem",
            }}
          >
            <div
              onClick={(e) => {
                changeTab(e, 1);
              }}
              style={{
                textDecoration: this.state.tab === 1 && "wavy underline",
              }}
              // style={this.tab === 1 && { textDecoration: "underline" }}
            >
              LINE & CURVE
            </div>
            <div
              onClick={(e) => {
                changeTab(e, 2);
              }}
              style={{
                textDecoration: this.state.tab === 2 && "wavy underline",
              }}
            >
              NIGHT LIGHT
            </div>
            <div
              onClick={(e) => {
                changeTab(e, 3);
              }}
              style={{
                textDecoration: this.state.tab === 3 && "wavy underline",
              }}
            >
              TRAINS
            </div>
            <div
              onClick={(e) => {
                changeTab(e, 4);
              }}
              style={{
                textDecoration: this.state.tab === 4 && "wavy underline",
              }}
            >
              NATURE
            </div>
          </div>

          {this.state.tab === 1 && (
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
          )}
          {this.state.tab === 2 && (
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
          )}
          {this.state.tab === 3 && (
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
          )}
          {this.state.tab === 4 && (
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
          )}

          {/* <Tabs
            defaultActiveKey="Line & Curve"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="Line & Curve" title="Line & Curve">
              Tab content for Home
            </Tab>
            <Tab eventKey="Night Light" title="Night Light">
              Tab content for Profile
            </Tab>
            <Tab eventKey="Trains" title="Trains">
              Tab content for Contact
            </Tab>
            <Tab eventKey="Nature" title="Nature">
              Tab content for Contact
            </Tab>
          </Tabs> */}

          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
