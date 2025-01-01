import { supabase } from '../lib/supabaseClient';
import { TABLES } from '../lib/constants';

export async function getProjects() {
    console.log('Fetching projects...');
    const {data, error} = await supabase.from(TABLES.PROJECTS).select('*');
    console.log('Projects fetched:', data);
    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
    console.log('Projects fetched:', data);
    return data;
}

export async function getWorkExperience() {
    const {data, error} = await supabase.from(TABLES.WORK_EXPERIENCE).select('*');
    if (error) {
        console.error('Error fetching work experience:', error);
        return [];
    }
    return data;
}   

export async function getSkillset() {
    const {data, error} = await supabase.from(TABLES.SKILLSET).select('*');
    if (error) {
        console.error('Error fetching skillset:', error);
        return [];
    }
    return data;
}

export async function getContacts() {
    const {data, error} = await supabase.from(TABLES.CONTACTS).select('*');
    if (error) {
        console.error('Error fetching contacts:', error);
        return [];
    }
    return data;
}
