import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { SlashTag } from "../components/HelperFunctions";
import ReactLogo from "../assets/SkillsImages/reactIcon.png";
import CSharpLogo from "../assets/SkillsImages/c#Logo.png";
import CPlusPlusLogo from "../assets/SkillsImages/c++Logo.png";
import CssLogo from "../assets/SkillsImages/cssIcon.png";
import DevopsLogo from "../assets/SkillsImages/devopsLogo.png";
import GitLogo from "../assets/SkillsImages/gitLogo.png";
import HtmlLogo from "../assets/SkillsImages/htmlIcon.png";
import JavaLogo from "../assets/SkillsImages/javaLogo.png";
import JavaScriptLogo from "../assets/SkillsImages/javaScriptLogo.png";
import MaterialDesignLogo from "../assets/SkillsImages/materialDesignLogo.png";
import PythonLogo from "../assets/SkillsImages/pythonLogo.png";
import TypeScriptLogo from "../assets/SkillsImages/typeScriptLogo.png";
import UnityLogo from "../assets/SkillsImages/unityLogo.png";
import profileImage from "../assets/femaleProfile.png";
import UnrealEngineLogo from "../assets/SkillsImages/unrealEngineLogo.png";
import RobloxStudioLogo from "../assets/SkillsImages/robloxStudioLogo.png";

type AboutProps = {
  isSmallScreen: boolean;
};

function About(props: AboutProps) {
  const { isSmallScreen } = props;
  return (
    <Box sx={{ padding: "50px 0" }}>
      <SlashTag label={"About"} textSize={32} withDivider={true}></SlashTag>
      <Box sx={{ height: "100%", alignItems: "center", display: "flex" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <AboutMe></AboutMe>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: 200, md: 400 },
                }}
                src={profileImage}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ padding: "20px 0" }}>
            <SkillDisplay></SkillDisplay>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

type SkillDisplayProps = {};

const SkillDisplay = (props: SkillDisplayProps) => {
  const skills = SkillsList.map((skill) => (
    <SkillItemDisplay
      key={skill.id}
      image={skill.image}
      text={skill.text}
      category={skill.category}
      id={skill.id}
    />
  ));

  const learningSkills = LearningSkillsList.map((skill) => (
    <SkillItemDisplay
      key={skill.id}
      image={skill.image}
      text={skill.text}
      category={skill.category}
      id={skill.id}
    />
  ));

  return (
    <Container sx={{ padding: "0px" }}>
      <Grid container textAlign={"center"} spacing={1}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} md={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h1">Skilled in</Typography>
            </Grid>
            <Grid item xs={3} md={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>

            <Grid
              container
              sx={{
                padding: "16px 0",
                display: "flex",
                justifyContent: "center",
              }}
              spacing={5}
            >
              {skills}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{ textAlign: "center", marginTop: "50px" }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} md={4} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="h1">Currently learning</Typography>
            </Grid>
            <Grid item xs={3} md={4} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>

            <Grid
              container
              sx={{
                padding: "16px 0",
                display: "flex",
                justifyContent: "center",
              }}
              spacing={5}
            >
              {learningSkills}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const SkillItemDisplay = (props: SkillItem) => {
  const { image, text } = props;
  return (
    <Grid item xs={4} md={3}>
      <Box
        component="img"
        sx={{
          height: { xs: 40, md: 50 },
        }}
        src={image}
      />
      <Typography variant="h6">{text}</Typography>
    </Grid>
  );
};

type SkillItem = {
  id: number;
  image: string;
  text: string;
  category: string;
};

const SkillsList = [
  {
    id: 0,
    image: ReactLogo,
    text: "React",
    category: "Web",
  },
  {
    id: 1,
    image: HtmlLogo,
    text: "HTML",
    category: "Web",
  },
  {
    id: 2,
    image: CssLogo,
    text: "CSS",
    category: "Web",
  },
  {
    id: 3,
    image: MaterialDesignLogo,
    text: "Material Design",
    category: "Web",
  },
  {
    id: 4,
    image: JavaScriptLogo,
    text: "JavaScript",
    category: "Web",
  },
  {
    id: 5,
    image: TypeScriptLogo,
    text: "TypeScript",
    category: "Web",
  },
  {
    id: 6,
    image: GitLogo,
    text: "GitHub",
    category: "Tool",
  },
  {
    id: 7,
    image: UnityLogo,
    text: "Unity",
    category: "Tool",
  },
  {
    id: 8,
    image: DevopsLogo,
    text: "Azure Devops",
    category: "Tool",
  },
  {
    id: 9,
    image: CSharpLogo,
    text: "C#",
    category: "Language",
  },
  {
    id: 10,
    image: JavaLogo,
    text: "Java",
    category: "Language",
  },
  {
    id: 11,
    image: PythonLogo,
    text: "Python",
    category: "Language",
  },
];

const LearningSkillsList = [
  {
    id: 0,
    image: CPlusPlusLogo,
    text: "C++",
    category: "Language",
  },
  {
    id: 1,
    image: UnrealEngineLogo,
    text: "Unreal Engine",
    category: "Tool",
  },
  {
    id: 2,
    image: RobloxStudioLogo,
    text: "Roblox Studio",
    category: "Tool",
  },
];

const AboutMe: React.FC = () => {
  const theme = useTheme();
  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h5">
        👋 Hi there, I’m Elin Forsberg, a young{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          Game Developer
        </span>{" "}
        and{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          Software Engineer
        </span>{" "}
        from Sweden 🇸🇪🎮💻
      </Typography>
      <List>
        <Typography variant="h6" fontWeight={700}>
          👩‍💻As a professional:
        </Typography>
        <ListItem>
          <Typography variant="h6">
            I'm a driven go-getter who knows how to get things done. My passion
            for learning shines through in both game development and
            programming. My education in Software Engineering equips me with a
            deep understanding of programming and coding principles, providing a
            strong foundation to develop software and games of the highest
            quality.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">
            Whether it's tackling complex challenges or working collaboratively
            with my team, I thrive on the excitement of problem-solving. Outside
            work hours, I actively explore various game development and
            programming techniques and continually expand my knowledge.
          </Typography>
        </ListItem>
      </List>
      <List>
        <Typography variant="h6" fontWeight={700}>
          👩‍💼Who am I?
        </Typography>

        <ul>
          <li style={{ fontSize: "20px" }}>
            I always share my thoughts while staying open to different perspectives.
          </li>
          <li style={{ fontSize: "20px" }}>I'm passionate about what I do and always eager to learn and grow.</li>
          <li style={{ fontSize: "20px" }}>
            I can be a little stubborn, but I prefer to call it determination!
          </li>
          <li style={{ fontSize: "20px" }}>I'm an anime enthusiast</li>
          <li style={{ fontSize: "20px" }}>I'm a gamer who enjoys a good challenge.</li>
          <li style={{ fontSize: "20px" }}>
            I don’t drink coffee (I know, hard to believe!).
          </li>
        </ul>
      </List>
    </Container>
  );
};

export default About;
