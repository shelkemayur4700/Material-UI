import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography varient="h6" fontweight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://imgs.search.brave.com/2WwsqIIOAP9EX90adaJb3gNvoPQpZ9hZVl-l5X7iv5c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/ODEzNDMxOS9waG90/by9wb3J0cmFpdC1v/Zi15b3VuZy1pbmRp/YW4tYnVzaW5lc3N3/b21hbi1vci1zY2hv/b2wtdGVhY2hlci1w/b3NlLWluZG9vcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUR3MW5LRnRuVV9C/Zm0ySTNPUFF4Qm1T/S2U5TnRTenV4NmJI/cWE5bFZaN0E9"
          />
          <Avatar
            alt="Travis Howard"
            src="https://imgs.search.brave.com/Tjanwadlen17huzaou9j2UArEpex_pe9aEZaCugMOC0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/OTc4ODAzMC9waG90/by9wb3J0cmFpdC1v/Zi15b3VuZy1jb25m/aWRlbnQtaW5kaWFu/LXdvbWFuLXBvc2Ut/b24tYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YVF3NVloR2w5/OWhMMU83N3Rod3BR/VG1xVkU3YmM4ckNY/OUgwZ1Rlb1hfaz0"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://imgs.search.brave.com/R9Rn26-ZtnTEErEkgzYMeTa91lFRbLP4rgfbJhvmn6Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/MzIwNjY0NC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLWNh/dWNhc2lhbi1tYW4t/cG9zZS1pbi1vZmZp/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTdscGJ4NWpF/VlFrZEcwaUE5VXZz/RVVtZXU3b2VkMkEz/c3V2TXdNUEFlSXM9"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://imgs.search.brave.com/RB04IGCAH4rIeeqevbB3APwiusBjQpMwKaXyS22FEz8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3lvdW5n/LWFkdWx0LXByb2Zp/bGUtcGljdHVyZS1y/ZWQtNDUwdy0xNjU1/NzQ3MDUwLmpwZw"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://imgs.search.brave.com/DZTem2C2of2rxE1xjdvfFkKgYowVojRV0UoOpSV-9uk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjcy/NjI3MzA0L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYmVhdXRpZnVs/LXlvdW5nLWdpcmwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVJ5cXVsQjdUMHZo/MzBrTFFlTGswZWZK/VFVobFpjNUtsZ1J2/VDlXSUZpQWc9"
          />
        </AvatarGroup>
        <Typography varient="h6" fontweight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {/* <ImageListItem>
            <img
              src="https://imgs.search.brave.com/s0c2p25TLsqXynAyE_F-p2MXC28X7JagzSCW_2soMy4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9oZWFsdGh5LWJy/ZWFrZmFzdC1pbmdy/ZWRpZW50cy1mcmVl/LXBob3RvLmpwZz93/PTYwMCZxdWFsaXR5/PTgw"
              alt="food"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA"
              alt="food"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://imgs.search.brave.com/t9A7O4e3Cv2_C2oXQCG9JAZROsRUvHsUbt4eT3U7TZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMmYxUHEy/eThhcVVYV2dWU0No/MWNONC9kZmU1MWUy/MDRjYmVmOGZkZjA0/OWIzMWY4OWE2NWUw/NS9mb29kLWFuZC1k/cmluay1pbWFnZXMu/anBnP2ZpdD1maWxs/Jnc9NjAwJmg9NDAw"
              alt="food"
            />
          </ImageListItem> */}

          <ImageListItem>
            <img
              src="https://imgs.search.brave.com/zkP2CPD3obHyZu2cUAoTs4VvnN0vwESyW0k4k4vlezU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmVzaC1tdXNs/aS15b2d1cnQtZnJl/ZS1waG90by5qcGc_/dz02MDAmcXVhbGl0/eT04MA"
              alt="food"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://imgs.search.brave.com/FrarXnbeSLul8l6MQOeHdto4PuxBlFY8jlMpwSlkWkE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjEw/NzQyNzI2L3Bob3Rv/L3N0cmVldC1mb29k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12SGFLQ01oWXF5/WVJ4dDhfOFVsMm9I/YkszZnQwOWkwVzQ2/QjRaaXoyaEhnPQ"
              alt="food"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://imgs.search.brave.com/wTZiftuVro2tkR7Ep7l6yJ02oM2_HkPa_lizjsnHSnE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbWVyaWNhbi1m/YXN0LWZvb2QtaGFt/YnVyZ2Vycy1mcmVu/Y2gtZnJpZXMtaG90/LWRvZ3MtZmFzdC1m/b29kLXVuaGVhbHRo/eS1lYXRpbmctY29u/Y2VwdC10b3Atdmll/d18xMTQ5NDEtMjU0/NS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
              alt="food"
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://imgs.search.brave.com/Wi5KWB3eEXjDwN02sDUSSuaZKPmQUuiDizEKTyOjRQ4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy95b2dodXJ0LXdp/dGgtbXVzbGktYW5k/LWhlYWx0aHktZnJ1/aXQtZnJlZS1waG90/by5qcGc_dz02MDAm/cXVhbGl0eT04MA"
              alt="food"
            />
          </ImageListItem> */}
        </ImageList>
        <Typography varient="h6" fontweight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    {" "}
                    john dev
                  </Typography>
                  {" - Doyou have Paris recommdations? Have you ever..?"}
                </>
              }
            />
          </ListItem>
          {/* -----------------------------------------------------  */}
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    {" "}
                    john dev
                  </Typography>
                  {" - Doyou have Paris recommdations? Have you ever..?"}
                </>
              }
            />
          </ListItem>
          {/* -----------------------------------------------------  */}
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    {" "}
                    john dev
                  </Typography>
                  {" - Doyou have Paris recommdations? Have you ever..?"}
                </>
              }
            />
          </ListItem>
          {/* -----------------------------------------------------  */}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
