import { NavigationItem } from "@/modules/common/types/NavigationItem"
import { useTranslation } from "react-i18next"
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export const useDashboardNavigation = () => {

    const { t } = useTranslation()
    const navigation: NavigationItem[] = [
        {
            label: t('dashboard.title'),
            icon: WidgetsOutlinedIcon,
            path: '/',
            group: 'main',
        },
        {
            label: t('users.title'),

            icon: AccountCircleOutlinedIcon,
            path: '/users',
            group: 'main',

        },
        {
            label: t('products.title'),
            icon: ShoppingBagOutlinedIcon,
            path: '/products',
            group: 'main',

        },


    ]


    return navigation
}