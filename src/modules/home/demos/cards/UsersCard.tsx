import { ImportContacts } from "@mui/icons-material";
import {
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function UsersCard() {
  return (
    <Card className="col-span 12 md:col-span-4 p-4">
      <Typography variant="h6" fontWeight={"bold"}>
        Active Users
      </Typography>
      <Typography variant="body1" color="GrayText">
        Lorem ipsum dolor sit amet.
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>

          <ListItemText
            primary="Mohammad Khayata"
            secondary={
              <>
                <span>SuperAdmin</span>
              </>
            }
          />
          <IconButton>
            <ImportContacts></ImportContacts>
          </IconButton>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>

          <ListItemText
            primary="Albert"
            secondary={
              <>
                <span>Admin</span>
              </>
            }
          />
          <IconButton>
            <ImportContacts></ImportContacts>
          </IconButton>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>

          <ListItemText
            primary="Emilia clarke"
            secondary={
              <>
                <span>Admin</span>
              </>
            }
          />
          <IconButton>
            <ImportContacts></ImportContacts>
          </IconButton>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>

          <ListItemText
            primary="Gabriel Martinelli"
            secondary={
              <>
                <span>Admin</span>
              </>
            }
          />
          <IconButton>
            <ImportContacts></ImportContacts>
          </IconButton>
        </ListItem>
      </List>
    </Card>
  );
}
