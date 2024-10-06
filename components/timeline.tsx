import { Timeline as FlowbiteTimeline } from "flowbite-react";

export default function Timeline() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-gray-600">Work Experience</h2>
      <FlowbiteTimeline theme={{ item: { content: { title: {} } } }}>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>04/2018 - present</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>Invision AG</FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Workforce Managment and e-learning software in the sector of call
              centers
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>07/2016 - 03/2018</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>
              Sedenius Engineering GmbH
            </FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Service provider in the automotive sector
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>09/2015 - 06/2016</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>digipax GmbH</FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Develops and sells Picture Archiving and Communication System
              (PACS) software for medical practices
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>09/2013 - 03/2015</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>
              Gesellschaft zur Förderung angewandter Informatik e.V.
            </FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Non-university research and development facility
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
      </FlowbiteTimeline>
      <h2 className="text-4xl font-bold text-gray-600">Education</h2>
      <FlowbiteTimeline>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>10/2012 - 03/2015</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>
              Hochschule für Technik und Wirtschaft Berlin (FH)
            </FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Master of Science
              <br />
              Thesis: Segmentation and feature detection of 3D body scan data
              for the parameterization of virtual skeleton models (in
              cooperation with the GFaI e.V.).
              <br />
              Focus: Image Processing, Visual Computing, Visual Information
              Retrieval, Feature Detection, Real Time Interactive Systems, Game
              Engines.
              <br />
              Project: Implementation of the SURF algorithm and the application
              of a restricted boltzmann machine for de-sizing the descriptors.
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
      </FlowbiteTimeline>
      <h2 className="text-4xl font-bold text-gray-600">
        Volunteer experiences
      </h2>
      <FlowbiteTimeline>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>04/2024 - 01/2025</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>
              Sabbatical/Parental leave
            </FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Take care of my young daughter as a full time father.
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
        <FlowbiteTimeline.Item>
          <FlowbiteTimeline.Point />
          <FlowbiteTimeline.Content>
            <FlowbiteTimeline.Time>10/2011 - 09/2012</FlowbiteTimeline.Time>
            <FlowbiteTimeline.Title>Bike journey</FlowbiteTimeline.Title>
            <FlowbiteTimeline.Body>
              Intercultural experiences through Western Europe with long cycling
              stages.
              <br />
              Meeting people on many different places through CouchSurfing.
              <br />
              Worked as volunteer gardener in Portugal.
            </FlowbiteTimeline.Body>
          </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
      </FlowbiteTimeline>
    </div>
  );
}
